import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import PDFDocument from 'pdfkit';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '../assets');

// Helper: Generate exact Word (.docx) resume
const generateDocxResume = async (filePath) => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: 'Devansh Pundir',
            heading: HeadingLevel.TITLE,
          }),
          new Paragraph({
            children: [
              new TextRun({ text: 'LinkedIn: ', bold: true }),
              new TextRun('https://www.linkedin.com/in/devansh-pundir-41a086233/\n'),
              new TextRun({ text: 'Email-id: ', bold: true }),
              new TextRun('devanshpundir477@gmail.com\n'),
              new TextRun({ text: 'Mobile: ', bold: true }),
              new TextRun('+91 8434950370\n'),
              new TextRun({ text: 'GitHub: ', bold: true }),
              new TextRun('https://github.com/Devanshpundir-code\n\n'),
            ],
          }),
          new Paragraph({
            text: 'EDUCATION',
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            children: [
              new TextRun('• Pursuing BTECH-CSE from JK Lakshmipat University Jaipur (4th Semester)\n\n'),
            ],
          }),
          new Paragraph({
            text: 'FIELDS OF INTEREST',
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            children: [
              new TextRun('• Building http://www.dyoraarobotics.in (A competitive robotics parts website)\n'),
              new TextRun('• Embedded systems, C++ programming, Competitive robotics, industrial robotics\n'),
              new TextRun('• Machine learning and AI applications\n\n'),
            ],
          }),
          new Paragraph({
            text: 'TECHNICAL SKILLS',
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            children: [
              new TextRun('• Proficient in Python, C, and C++ for embedded systems development, PCB designing, Circuit designing, ROS2, Gazebo, and Rviz, Machine learning, computer vision, scikit-learn and OpenCV\n\n'),
            ],
          }),
          new Paragraph({
            text: 'MAJOR PROJECTS',
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            children: [
              new TextRun({ text: 'Robotics Projects:\n', bold: true }),
              new TextRun('• Developed a CNC writing plotter integrated with a web interface, Duration (20/07/2025 ~ 30/07/2025)\n'),
              new TextRun('• Made a custom 16 channel infrared sensor array with complete custom robot, Duration (14/09/2025), Documented: https://rb.gy/ybsmlq\n'),
              new TextRun('• Participated and won many robotics competitions (Detailed described: https://rb.gy/akng2d)\n'),
              new TextRun('• Built a face recognition–based automatic security door system, Duration (20/02/2025 ~ 24/02/2025)\n\n'),
              new TextRun({ text: 'Machine Learning Projects:\n', bold: true }),
              new TextRun('• Fish Species Predictor: Used Random Forest to classify fish species based on physical features\n'),
              new TextRun('• Handwritten Digit Recognition: Achieved 98% accuracy using CNN on the MNIST dataset\n'),
              new TextRun('• Attendance-Based Class Prediction: Created a Random Forest model to predict class attendance using 50 days of personal data\n'),
              new TextRun('(ALL Projects are available at GitHub)\n\n'),
            ],
          }),
          new Paragraph({
            text: 'CERTIFICATIONS & ACHIEVEMENTS',
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            children: [
              new TextRun('• Techfest, IIT Bombay: Certificate of Excellence, 6th position nationwide in Meshmerize competition (Dec 2025)\n'),
              new TextRun('• Techfest, IIT Bombay: Certificate of Excellence, 5th position in Meshmerize competition (Delhi Zone, Oct 2025)\n'),
              new TextRun('• TechnoXian World Cup 2025: Certificate of Appreciation, Open For All Fastest Line Follower Challenge, Noida Stadium (Aug-Sep 2025)\n'),
              new TextRun('• Coursera: Python for Data Analysis: Pandas & NumPy (Mar 2025, Verify: https://coursera.org/verify/DWZOGEY7OU5Y)\n'),
              new TextRun('• University of Michigan / Coursera: Exploring C (May 2025, Verify: https://coursera.org/verify/1S167XI2WQB7)\n'),
            ],
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(filePath, buffer);
  return filePath;
};

// Helper: Generate exact PDF resume
const generatePdfResume = (filePath) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 45 });
    const writeStream = fs.createWriteStream(filePath);
    doc.pipe(writeStream);

    // Header
    doc.fontSize(22).font('Helvetica-Bold').text('Devansh Pundir', { align: 'left' });
    doc.moveDown(0.3);

    doc.fontSize(10).font('Helvetica')
      .text('LinkedIn: https://www.linkedin.com/in/devansh-pundir-41a086233/')
      .text('Email-id: devanshpundir477@gmail.com')
      .text('Mobile: +91 8434950370')
      .text('GitHub: https://github.com/Devanshpundir-code');
    doc.moveDown(0.8);

    const sectionTitle = (title) => {
      doc.fontSize(12).font('Helvetica-Bold').text(title);
      doc.strokeColor('#111111').lineWidth(1).moveTo(45, doc.y).lineTo(550, doc.y).stroke();
      doc.moveDown(0.4);
    };

    // Education
    sectionTitle('EDUCATION:');
    doc.fontSize(10).font('Helvetica')
      .text('• Pursuing BTECH-CSE from JK Lakshmipat University Jaipur (4th Semester)');
    doc.moveDown(0.8);

    // Fields of Interest
    sectionTitle('FIELDS OF INTEREST:');
    doc.fontSize(10).font('Helvetica')
      .text('• Building http://www.dyoraarobotics.in (A competitive robotics parts website)')
      .text('• Embedded systems, C++ programming, Competitive robotics, industrial robotics')
      .text('• Machine learning and AI applications');
    doc.moveDown(0.8);

    // Technical Skills
    sectionTitle('TECHNICAL SKILLS:');
    doc.fontSize(10).font('Helvetica')
      .text('• Proficient in Python, C, and C++ for embedded systems development, PCB designing, Circuit designing, ROS2, Gazebo, and Rviz, Machine learning, computer vision, scikit-learn and OpenCV');
    doc.moveDown(0.8);

    // Major Projects
    sectionTitle('MAJOR PROJECTS:');
    doc.fontSize(10).font('Helvetica-Bold').text('Robotics Projects:');
    doc.font('Helvetica')
      .text('• Developed a CNC writing plotter integrated with a web interface, Duration (20/07/2025 ~ 30/07/2025)')
      .text('• Made a custom 16 channel infrared sensor array with complete custom robot, Duration (14/09/2025), Documented: https://rb.gy/ybsmlq')
      .text('• Participated and won many robotics competitions (Detailed described: https://rb.gy/akng2d)')
      .text('• Built a face recognition–based automatic security door system, Duration (20/02/2025 ~ 24/02/2025)');
    doc.moveDown(0.4);

    doc.font('Helvetica-Bold').text('Machine Learning Projects:');
    doc.font('Helvetica')
      .text('• Fish Species Predictor: Used Random Forest to classify fish species based on physical features')
      .text('• Handwritten Digit Recognition: Achieved 98% accuracy using CNN on the MNIST dataset')
      .text('• Attendance-Based Class Prediction: Created a Random Forest model to predict class attendance using 50 days of personal data')
      .text('(ALL Projects are available at GitHub)');
    doc.moveDown(0.8);

    // Certifications
    sectionTitle('CERTIFICATIONS & ACHIEVEMENTS:');
    doc.fontSize(9.5).font('Helvetica')
      .text('• Techfest, IIT Bombay: Certificate of Excellence, 6th position nationwide in Meshmerize competition (Dec 2025)')
      .text('• Techfest, IIT Bombay: Certificate of Excellence, 5th position in Meshmerize competition (Delhi Zone, Oct 2025)')
      .text('• TechnoXian World Cup 2025: Certificate of Appreciation, Open For All Fastest Line Follower Challenge, Noida Stadium')
      .text('• Coursera: Python for Data Analysis: Pandas & NumPy (Mar 2025, Verify: https://coursera.org/verify/DWZOGEY7OU5Y)')
      .text('• University of Michigan / Coursera: Exploring C (May 2025, Verify: https://coursera.org/verify/1S167XI2WQB7)');

    doc.end();

    writeStream.on('finish', () => resolve(filePath));
    writeStream.on('error', reject);
  });
};

// Ensure directory exists
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

// Generate files on module load to guarantee availability
const pdfPath = path.join(ASSETS_DIR, 'Devansh_Pundir_Resume.pdf');
const docxPath = path.join(ASSETS_DIR, 'Devansh_Pundir_Resume.docx');
generatePdfResume(pdfPath).catch(err => console.error('PDF generation error:', err.message));
generateDocxResume(docxPath).catch(err => console.error('DOCX generation error:', err.message));

// @desc    Download PDF Resume
// @route   GET /api/resume/pdf
// @access  Public
export const downloadPdfResume = async (req, res, next) => {
  try {
    if (!fs.existsSync(pdfPath)) {
      await generatePdfResume(pdfPath);
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Devansh_Pundir_Resume.pdf"');
    
    const fileStream = fs.createReadStream(pdfPath);
    fileStream.pipe(res);
  } catch (error) {
    next(error);
  }
};

// @desc    Download Word (.docx) Resume
// @route   GET /api/resume/docx
// @access  Public
export const downloadDocxResume = async (req, res, next) => {
  try {
    if (!fs.existsSync(docxPath)) {
      await generateDocxResume(docxPath);
    }

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    );
    res.setHeader('Content-Disposition', 'attachment; filename="Devansh_Pundir_Resume.docx"');

    const fileStream = fs.createReadStream(docxPath);
    fileStream.pipe(res);
  } catch (error) {
    next(error);
  }
};
