const projects = [
  {
    id: 'night-fury-robot',
    title: 'Night Fury Autonomous High-Speed Robot',
    category: 'Hardware & IoT',
    techStack: ['C++', 'Arduino IDE', 'EasyEDA', 'ROS2', 'Gazebo', 'PCB Design'],
    description: 'Custom high-current autonomous robotic system with 16-channel sensor array, custom carrier board, dual DRV8874 motor driver stage, and high-frequency control algorithms.',
    longDescription: 'Engineered a specialized autonomous robotics platform capable of high-velocity line-following and obstacle navigation. Designed custom multi-layer PCBs in EasyEDA, verified 3D form factor in Autodesk Fusion 360, and tested motion algorithms within ROS2 and Gazebo before hardware deployment.',
    github: 'https://github.com/Devanshpundir-code/NightFuryLineFollower',
    liveDemo: 'https://github.com/Devanshpundir-code/NightFuryLineFollower#demo',
    featured: true,
    highlights: ['16-channel differential IR array', 'High-current MOSFET power delivery', 'ROS2/Gazebo simulation integration']
  },
  {
    id: 'mern-incident-platform',
    title: 'Incident Reporting & Management Platform',
    category: 'Full-Stack MERN',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API'],
    description: 'Full-stack MERN application for real-time incident tracking, automated status pipelines, and geolocation tagging with secure MongoDB persistence.',
    longDescription: 'Architected an end-to-end incident management platform utilizing Express.js REST API with input validation, MongoDB document storage via Mongoose, and a responsive React single-page frontend. Features real-time state synchronization and automated role dispatching.',
    github: 'https://github.com/Devanshpundir-code/incident-reporting-api',
    liveDemo: 'https://github.com/Devanshpundir-code/incident-reporting-api#readme',
    featured: true,
    highlights: ['Secure CRUD REST endpoints', 'Mongoose schema validation', 'Single-page responsive dashboard']
  },
  {
    id: 'dyoraa-iot-dashboard',
    title: 'Dyoraa Industrial IoT Device Fleet Manager',
    category: 'Full-Stack & Hardware',
    techStack: ['React.js', 'Express.js', 'MongoDB', 'WebSockets', 'Python', 'ESP32'],
    description: 'Fleet management telemetry dashboard tracking robotic carrier boards, battery health, motor temperatures, and live sensor streams.',
    longDescription: 'Created an industrial monitoring portal for Dyoraa Robotics hardware deployments. Aggregates telemetry from deployed microcontrollers, persists diagnostic logs in MongoDB, and provides interactive charts and live system health notifications.',
    github: 'https://github.com/Devanshpundir-code/Share_bus_system',
    liveDemo: 'https://github.com/Devanshpundir-code/Share_bus_system#demo',
    featured: true,
    highlights: ['Live sensor telemetry', 'Interactive chart visualizer', 'Mobile-responsive dark theme']
  },
  {
    id: 'hand-drawn-portfolio',
    title: 'Hand-Drawn MERN Portfolio Website',
    category: 'Full-Stack MERN',
    techStack: ['React.js', 'React Router', 'Node.js', 'Express.js', 'MongoDB', 'CSS3'],
    description: 'A handcrafted black-and-white sketch portfolio website featuring typewriter animations, Express resume download streaming, and MongoDB contact persistence.',
    longDescription: 'A distinctive web application designed with a black-and-white hand-drawn sketchbook aesthetic. Implements complete React Router navigation, dark/light chalkboard mode, smooth scroll animations, PDF/Word file streaming via Express, and Mongoose contact form integration.',
    github: 'https://github.com/Devanshpundir-code/portfolio',
    liveDemo: 'http://localhost:5173',
    featured: true,
    highlights: ['Unique hand-drawn UI identity', 'Multi-format CV backend streaming', 'MongoDB Mongoose integration']
  }
];

// @desc    Get all projects with optional filtering
// @route   GET /api/projects
// @access  Public
const getProjects = (req, res) => {
  const { tech, category } = req.query;
  let filtered = [...projects];

  if (tech && tech !== 'All') {
    filtered = filtered.filter(p =>
      p.techStack.some(t => t.toLowerCase().includes(tech.toLowerCase()))
    );
  }

  if (category && category !== 'All') {
    filtered = filtered.filter(p =>
      p.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  res.status(200).json({
    success: true,
    count: filtered.length,
    data: filtered
  });
};

// @desc    Get single project by ID
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({
      success: false,
      message: 'Project not found'
    });
  }

  res.status(200).json({
    success: true,
    data: project
  });
};

module.exports = {
  getProjects,
  getProjectById
};
