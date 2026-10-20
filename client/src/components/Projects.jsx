import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Robotics', 'Embedded Systems', 'Machine Learning', 'Web'];

  const projects = [
    {
      id: 'cnc-writing-plotter',
      title: 'CNC Writing Plotter',
      description: 'Developed a CNC writing plotter integrated with a web interface, combining software and hardware to produce physical writing.',
      tags: ['Robotics', 'Hardware', 'Web'],
      category: ['Robotics', 'Embedded Systems', 'Web'],
      github: 'https://github.com/Devanshpundir-code',
      liveDemo: 'https://github.com/Devanshpundir-code',
      illustration: (
        <svg viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
          {/* CNC Bed */}
          <rect x="20" y="30" width="120" height="50" rx="3" />
          <line x1="20" y1="55" x2="140" y2="55" strokeDasharray="3 2" />
          {/* Gantry rails */}
          <line x1="15" y1="20" x2="145" y2="20" strokeWidth="2.5" />
          {/* Animated Pen Carriage on Hover */}
          <g className="animate-hover-cnc">
            <line x1="60" y1="15" x2="60" y2="85" strokeWidth="2" />
            <rect x="52" y="35" width="16" height="20" fill="var(--bg-primary)" />
            <line x1="60" y1="55" x2="60" y2="70" strokeWidth="2.5" />
            <circle cx="60" cy="70" r="1.5" fill="currentColor" />
          </g>
          {/* Stepper motor */}
          <rect x="125" y="10" width="18" height="15" rx="2" fill="var(--bg-primary)" />
        </svg>
      ),
    },
    {
      id: 'face-recognition-door',
      title: 'Face Recognition-Based Automatic Security Door',
      description: 'Built an automatic security door system using face recognition, combining computer vision with physical system control.',
      tags: ['Computer Vision', 'Automation', 'Robotics'],
      category: ['Robotics', 'Embedded Systems', 'Machine Learning'],
      github: 'https://github.com/Devanshpundir-code/DoorUnlocking_FaceDetection_Arduino',
      liveDemo: 'https://github.com/Devanshpundir-code/FaceDetectionDoorOpening',
      illustration: (
        <svg viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
          {/* Door Frame */}
          <rect x="35" y="10" width="55" height="80" rx="2" />
          <line x1="80" y1="50" x2="84" y2="50" strokeWidth="2.5" />
          {/* Person sketch at door */}
          <circle cx="115" cy="30" r="9" />
          <path d="M 103,60 Q 115,48 127,60 L 127,90 L 103,90 Z" />
          {/* Animated Scanner Beam on Hover */}
          <g className="animate-hover-laser">
            <line x1="38" y1="25" x2="88" y2="25" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
            <circle cx="38" cy="25" r="2.5" fill="#ef4444" stroke="none" />
          </g>
          <path d="M 40,25 L 110,28" strokeDasharray="2 2" opacity="0.6" />
        </svg>
      ),
    },
    {
      id: 'handwritten-digit-recognition',
      title: 'Handwritten Digit Recognition',
      description: 'Developed a CNN for handwritten digit recognition using the MNIST dataset, achieving 98% accuracy.',
      tags: ['Machine Learning', 'Deep Learning', 'Computer Vision'],
      category: ['Machine Learning'],
      github: 'https://github.com/Devanshpundir-code/Keras-models',
      liveDemo: 'https://github.com/Devanshpundir-code/College_machine_learning_project',
      illustration: (
        <svg viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
          {/* Drawing Tablet / Notebook */}
          <rect x="30" y="15" width="55" height="70" rx="3" />
          {/* Digit 7 display with pulse */}
          <text className="animate-pulse-dot" x="58" y="60" fontSize="38" fontWeight="800" textAnchor="middle" fill="currentColor" fontFamily="monospace">
            7
          </text>
          {/* Output prediction screen */}
          <rect x="95" y="25" width="45" height="45" rx="3" strokeDasharray="3 2" />
          <line x1="102" y1="38" x2="130" y2="38" />
          <line x1="102" y1="48" x2="125" y2="48" />
          <line x1="102" y1="58" x2="133" y2="58" />
        </svg>
      ),
    },
    {
      id: 'fish-species-predictor',
      title: 'Fish Species Predictor',
      description: 'Built a Random Forest model to predict fish species based on physical features.',
      tags: ['Machine Learning', 'Python', 'Scikit-learn'],
      category: ['Machine Learning'],
      github: 'https://github.com/Devanshpundir-code/ml-projects-of-RandomForest',
      liveDemo: 'https://github.com/Devanshpundir-code/ML-projects.',
      illustration: (
        <svg viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
          {/* Hand-drawn fish sketch body */}
          <path d="M 25,50 Q 60,25 105,45 Q 120,40 128,50 Q 120,60 105,55 Q 60,75 25,50 Z" />
          {/* Fish Eye */}
          <circle cx="45" cy="48" r="3" fill="currentColor" />
          {/* Fin */}
          <path d="M 70,50 Q 80,62 90,52" />
          {/* Scales pattern */}
          <path d="M 60,40 Q 65,45 70,40" />
          <path d="M 75,40 Q 80,45 85,40" />
          <path d="M 67,48 Q 72,53 77,48" />
          {/* Animated Tail Fin on Hover */}
          <path className="animate-hover-tail" d="M 128,50 L 142,32 L 136,50 L 142,68 Z" fill="var(--bg-secondary)" />
        </svg>
      ),
    },
    {
      id: 'attendance-class-prediction',
      title: 'Attendance-Based Class Prediction',
      description: 'Created a Random Forest model to predict class attendance using 50 days of personal data.',
      tags: ['Machine Learning', 'Data Analysis'],
      category: ['Machine Learning'],
      github: 'https://github.com/Devanshpundir-code/ml-projects-of-RandomForest',
      liveDemo: 'https://github.com/Devanshpundir-code/MlProjects-KnearestNeighbor-algorithm',
      illustration: (
        <svg viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
          {/* Axes */}
          <line x1="25" y1="15" x2="25" y2="85" strokeWidth="2" />
          <line x1="25" y1="85" x2="135" y2="85" strokeWidth="2" />
          {/* Animated Bar charts on Hover */}
          <g className="animate-hover-bars">
            <rect x="38" y="55" width="14" height="30" fill="var(--bg-primary)" />
            <rect x="60" y="35" width="14" height="50" fill="var(--bg-primary)" />
            <rect x="82" y="45" width="14" height="40" fill="var(--bg-primary)" />
            <rect x="104" y="25" width="14" height="60" fill="var(--bg-primary)" />
          </g>
          {/* Trend line */}
          <polyline points="45,50 67,30 89,40 111,20" strokeDasharray="3 2" />
        </svg>
      ),
    },
    {
      id: 'dyoraa-robotics',
      title: 'Dyoraa Robotics',
      description: 'Developing a robotics-focused venture for competitive and educational robotics.',
      tags: ['Entrepreneurship', 'Robotics', 'Product Development'],
      category: ['Robotics', 'Embedded Systems'],
      github: 'https://github.com/Devanshpundir-code/LF-Robot',
      liveDemo: 'https://www.dyoraarobotics.in',
      illustration: (
        <svg viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
          {/* Dyoraa Mascot Shield / Logo */}
          <circle cx="80" cy="45" r="28" strokeWidth="2.5" />
          <text x="80" y="52" textAnchor="middle" fontSize="16" fontWeight="900" fill="currentColor" fontFamily="monospace">
            DR
          </text>
          <text x="80" y="86" textAnchor="middle" fontSize="12" fontWeight="800" fill="currentColor" letterSpacing="1px">
            DYORAA
          </text>
        </svg>
      ),
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" style={{ padding: '5rem 0 5.5rem' }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2.5rem',
            gap: '1.5rem',
          }}
        >
          <div className="section-header" style={{ marginBottom: 0 }}>
            <svg className="sketch-squiggle" viewBox="0 0 35 15">
              <path d="M 2,12 Q 10,2 18,10 T 32,5" />
            </svg>
            <h2>Things I've built.</h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`filter-pill ${activeFilter === f ? 'active' : ''}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Cards Grid (3 Columns) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="sketch-box"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Sketch Drawing Frame */}
                <div
                  style={{
                    height: '140px',
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: '8px',
                    border: '1.5px dashed var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    padding: '0.5rem',
                    overflow: 'hidden',
                  }}
                >
                  {p.illustration}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem', lineHeight: 1.3 }}>
                  {p.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  {p.description}
                </p>

                {/* Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {p.tags.map((t) => (
                    <span key={t} className="badge-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  borderTop: '1px solid rgba(0,0,0,0.08)',
                  paddingTop: '0.85rem',
                }}
              >
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>

                <a
                  href={p.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live Demo
                </a>

                <Link
                  to={`/project/${p.id}`}
                  style={{
                    marginLeft: 'auto',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                  }}
                >
                  Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
