const path = require('path');
const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, HeadingLevel } = require('docx');

const ASSETS_DIR = path.join(__dirname, '../assets');

// Helper to ensure DOCX exists or generate a formatted Word resume
const ensureDocxResume = async (filePath) => {
  if (fs.existsSync(filePath)) {
    return filePath;
  }

  console.log('Generating Devansh Pundir Word (.docx) resume...');
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: 'DEVANSH PUNDIR',
            heading: HeadingLevel.TITLE,
          }),
          new Paragraph({
            children: [
              new TextRun({ text: 'Full-Stack MERN Developer & Embedded Hardware Engineer\n', bold: true }),
              new TextRun({ text: 'Email: devanshpundir477@gmail.com | Location: India\n' }),
              new TextRun({ text: 'GitHub: https://github.com/Devanshpundir-code\n\n' }),
            ],
          }),
          new Paragraph({
            text: 'PROFESSIONAL SUMMARY',
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: 'Results-driven developer with expertise spanning full-stack web applications (React.js, Node.js, Express.js, MongoDB) and embedded robotics systems (PCB design, microcontrollers, ROS2, Gazebo). Demonstrated ability to architect resilient backend REST APIs and responsive, visually distinctive frontend interfaces.',
          }),
          new Paragraph({
            text: 'TECHNICAL SKILLS',
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            children: [
              new TextRun({ text: '• Frontend: ', bold: true }),
              new TextRun({ text: 'React.js, JavaScript (ES6+), React Router, HTML5, CSS3, Responsive Design\n' }),
              new TextRun({ text: '• Backend & DB: ', bold: true }),
              new TextRun({ text: 'Node.js, Express.js, REST API Architecture, MongoDB, Mongoose\n' }),
              new TextRun({ text: '• Hardware & Embedded: ', bold: true }),
              new TextRun({ text: 'PCB Schematic Design, EasyEDA, Autodesk Fusion 360, Arduino IDE, ROS2, Gazebo\n' }),
              new TextRun({ text: '• Tools & Platforms: ', bold: true }),
              new TextRun({ text: 'Git, GitHub, Postman, Linux/Ubuntu, VS Code, Vercel, Render' }),
            ],
          }),
          new Paragraph({
            text: 'EXPERIENCE',
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            children: [
              new TextRun({ text: 'Embedded Systems & PCB Design Intern - Dyoraa Robotics\n', bold: true }),
              new TextRun({ text: '• Designed high-current multi-layer PCBs and carrier boards for autonomous robots.\n' }),
              new TextRun({ text: '• Implemented sensor multiplexer arrays and motor-control driver circuits (DRV8874).\n' }),
              new TextRun({ text: '• Developed firmware and motion control logic integrated with ROS2 and Gazebo simulation.' }),
            ],
          }),
          new Paragraph({
            text: 'FEATURED PROJECTS',
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            children: [
              new TextRun({ text: '1. Night Fury High-Speed Autonomous Robot\n', bold: true }),
              new TextRun({ text: 'Custom high-current PCB carrier, 16-channel sensor array, custom firmware algorithms.\n\n' }),
              new TextRun({ text: '2. MERN Incident Reporting & Store Platform\n', bold: true }),
              new TextRun({ text: 'Full-stack REST API with Express, Mongoose schema validation, React single-page frontend.\n\n' }),
              new TextRun({ text: '3. Hand-Drawn Personal Portfolio Website\n', bold: true }),
              new TextRun({ text: 'Black-and-white sketch visual identity, React Router SPA, Express resume download streams, MongoDB contact persistence.' }),
            ],
          }),
          new Paragraph({
            text: 'EDUCATION',
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            children: [
              new TextRun({ text: 'Bachelor of Technology (B.Tech) in Computer Science / Engineering\n', bold: true }),
              new TextRun({ text: 'Coursework: Data Structures, Database Management Systems, Web Development, Microprocessors.' }),
            ],
          }),
        ],
      },
    ],
  });

  if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
  }

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(filePath, buffer);
  console.log(`Word resume created at: ${filePath}`);
  return filePath;
};

// @desc    Download PDF Resume
// @route   GET /api/resume/pdf
// @access  Public
const downloadPdfResume = (req, res, next) => {
  try {
    const pdfPath = path.join(ASSETS_DIR, 'Devansh_Pundir_Resume.pdf');

    if (!fs.existsSync(pdfPath)) {
      return res.status(404).json({
        success: false,
        message: 'PDF resume file not found on server'
      });
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
const downloadDocxResume = async (req, res, next) => {
  try {
    const docxPath = path.join(ASSETS_DIR, 'Devansh_Pundir_Resume.docx');
    await ensureDocxResume(docxPath);

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

module.exports = {
  downloadPdfResume,
  downloadDocxResume
};
