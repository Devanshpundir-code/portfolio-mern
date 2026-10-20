import React from 'react';

export default function Skills() {
  const toolCategories = [
    {
      title: 'PROGRAMMING',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ['Python', 'C', 'C++'],
    },
    {
      title: 'ROBOTICS AND EMBEDDED SYSTEMS',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      ),
      skills: [
        'STM32 | ESP32',
        'Microcontrollers',
        'Embedded C/C++',
        'Motor control',
        'Sensor integration',
        'Hardware-software integration',
      ],
    },
    {
      title: 'HARDWARE DESIGN',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="20" y2="8" />
          <line x1="20" y1="16" x2="20" y2="20" />
          <line x1="6" y1="9" x2="6" y2="15" />
          <path d="M 6,9 L 14,9 L 20,4" />
          <path d="M 6,15 L 14,15 L 20,20" />
        </svg>
      ),
      skills: ['PCB Design', 'Circuit Design', 'Electronics Prototyping'],
    },
    {
      title: 'ROBOTICS SIMULATION',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M 12,7 L 12,11" />
          <line x1="8" y1="16" x2="8" y2="16.01" />
          <line x1="16" y1="16" x2="16" y2="16.01" />
        </svg>
      ),
      skills: ['ROS2', 'Gazebo', 'RViz'],
    },
    {
      title: 'MACHINE LEARNING AND COMPUTER VISION',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11h-4V9.5C8.8 8.8 8 7.5 8 6a4 4 0 0 1 4-4z" />
          <path d="M 9 15v-2h6v2a3 3 0 0 1-6 0z" />
          <path d="M 6 18h12" />
        </svg>
      ),
      skills: ['Machine Learning', 'Scikit-learn', 'OpenCV', 'CNN', 'Random Forest'],
    },
    {
      title: 'TOOLS & HARDWARE PROTOTYPING',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      skills: ['EasyEDA', 'Autodesk Fusion 360', 'Arduino IDE', 'Git / GitHub', 'Linux / Ubuntu'],
    },
  ];

  return (
    <section id="skills" className="chalkboard-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ color: '#ffffff', marginBottom: '3rem' }}>
          <svg className="sketch-squiggle" viewBox="0 0 35 15">
            <path d="M 2,12 Q 10,2 18,10 T 32,5" />
          </svg>
          <h2 style={{ color: '#ffffff' }}>Tools I build with.</h2>
        </div>

        {/* 6 Columns / Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {toolCategories.map((cat, idx) => (
            <div
              key={idx}
              className="chalkboard-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Card Header with Icon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px dashed rgba(255, 255, 255, 0.2)',
                }}
              >
                <div style={{ color: '#ffffff' }}>{cat.icon}</div>
                <h3
                  className="mono"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    letterSpacing: '0.5px',
                    color: '#ffffff',
                    lineHeight: 1.3,
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.55rem',
                }}
              >
                {cat.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    style={{
                      fontSize: '0.92rem',
                      color: 'rgba(255, 255, 255, 0.85)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'transform 0.15s ease, color 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ opacity: 0.5 }}>&bull;</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
