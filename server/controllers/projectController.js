const projects = [
  {
    id: 'cnc-writing-plotter',
    title: 'CNC Writing Plotter',
    category: 'Robotics',
    techStack: ['Robotics', 'Hardware', 'Web', 'Python', 'C++'],
    description: 'Developed a CNC writing plotter integrated with a web interface, combining software and hardware to produce physical writing.',
    longDescription: 'Engineered a 2D CNC plotting machine with custom stepper motor drivers, belt-driven gantry, and pen lift servo mechanism. Built a web control dashboard for uploading SVG vector paths and executing smooth physical plotting routines.',
    github: 'https://github.com/Devanshpundir-code',
    liveDemo: 'https://github.com/Devanshpundir-code',
    highlights: ['Bipolar stepper driver stage', 'Real-time G-code parser', 'Web-based job queue']
  },
  {
    id: 'face-recognition-door',
    title: 'Face Recognition-Based Automatic Security Door',
    category: 'Robotics',
    techStack: ['Computer Vision', 'Automation', 'Robotics', 'Python', 'OpenCV'],
    description: 'Built an automatic security door system using face recognition, combining computer vision with physical system control.',
    longDescription: 'Created a smart access control system that captures video frames via camera, executes facial recognition using OpenCV and deep embeddings, and actuates physical solenoid door lock relays via microcontroller serial commands.',
    github: 'https://github.com/Devanshpundir-code/DoorUnlocking_FaceDetection_Arduino',
    liveDemo: 'https://github.com/Devanshpundir-code/FaceDetectionDoorOpening',
    highlights: ['Real-time facial detection & matching', 'Fail-secure relay circuit', 'Audit log telemetry']
  },
  {
    id: 'handwritten-digit-recognition',
    title: 'Handwritten Digit Recognition',
    category: 'Machine Learning',
    techStack: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Python', 'CNN'],
    description: 'Developed a CNN for handwritten digit recognition using the MNIST dataset, achieving 98% accuracy.',
    longDescription: 'Designed and trained a multi-layer Convolutional Neural Network (CNN) with dropout regularization and batch normalization on the MNIST handwritten digits dataset, achieving 98.2% test classification accuracy.',
    github: 'https://github.com/Devanshpundir-code/Keras-models',
    liveDemo: 'https://github.com/Devanshpundir-code/College_machine_learning_project',
    highlights: ['98.2% test set accuracy', 'Interactive drawing canvas inference', 'Optimized weight quantization']
  },
  {
    id: 'fish-species-predictor',
    title: 'Fish Species Predictor',
    category: 'Machine Learning',
    techStack: ['Machine Learning', 'Python', 'Scikit-learn', 'Random Forest'],
    description: 'Built a Random Forest model to predict fish species based on physical features.',
    longDescription: 'Trained an ensemble Random Forest classifier on multidimensional physical biometric measurements (weight, length, height, width ratios) with cross-validation and hyperparameter tuning.',
    github: 'https://github.com/Devanshpundir-code/ml-projects-of-RandomForest',
    liveDemo: 'https://github.com/Devanshpundir-code/ML-projects.',
    highlights: ['Ensemble decision trees', 'Feature importance analysis', 'High multi-class F1 score']
  },
  {
    id: 'attendance-class-prediction',
    title: 'Attendance-Based Class Prediction',
    category: 'Machine Learning',
    techStack: ['Machine Learning', 'Data Analysis', 'Python', 'Scikit-learn'],
    description: 'Created a Random Forest model to predict class attendance using 50 days of personal data.',
    longDescription: 'Collected and engineered predictive features over 50 consecutive academic days to forecast class attendance patterns, analyze academic risk indicators, and deliver automated schedule suggestions.',
    github: 'https://github.com/Devanshpundir-code/ml-projects-of-RandomForest',
    liveDemo: 'https://github.com/Devanshpundir-code/MlProjects-KnearestNeighbor-algorithm',
    highlights: ['50-day empirical dataset', 'Time-series feature extraction', 'Actionable alert thresholds']
  },
  {
    id: 'dyoraa-robotics',
    title: 'Dyoraa Robotics',
    category: 'Robotics',
    techStack: ['Entrepreneurship', 'Robotics', 'Product Development', 'STM32', 'PCB Design'],
    description: 'Developing a robotics-focused venture for competitive and educational robotics.',
    longDescription: 'Founding initiative specializing in custom PCB hardware, autonomous mobile robot kits, sensor carrier boards, and educational robotics modules designed for university competitions and research laboratories.',
    github: 'https://github.com/Devanshpundir-code/LF-Robot',
    liveDemo: 'https://www.dyoraarobotics.in',
    highlights: ['Custom high-current PCB design', 'Commercial product prototyping', 'Competition-grade reliability']
  }
];

export const getProjects = (req, res) => {
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

export const getProjectById = (req, res) => {
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
