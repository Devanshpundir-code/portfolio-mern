import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';

// Optional email notification transporter
const createTransporter = () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }
  return null;
};

// @desc    Handle Contact Form Submission
// @route   POST /api/contact
// @access  Public
export const submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // Validate inputs
    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Name is required'
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    if (!message || message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Message must be at least 10 characters long'
      });
    }

    // Persist to MongoDB
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      ipAddress: req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown',
      userAgent: req.headers['user-agent'] || 'Unknown'
    });

    // Optional email notification
    const transporter = createTransporter();
    if (transporter && process.env.CONTACT_RECIPIENT_EMAIL) {
      try {
        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_RECIPIENT_EMAIL,
          subject: `New Portfolio Message from ${contact.name}`,
          text: `You have received a new contact message:\n\nName: ${contact.name}\nEmail: ${contact.email}\nDate: ${contact.createdAt}\n\nMessage:\n${contact.message}`
        });
      } catch (mailError) {
        console.warn('Optional email notification failed, but contact was stored in DB:', mailError.message);
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received and saved successfully.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        createdAt: contact.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Retrieve all messages (for evaluator/admin verification)
// @route   GET /api/contact/messages
// @access  Public / Evaluator
export const getAllMessages = async (req, res, next) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }).limit(100);
    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    next(error);
  }
};
