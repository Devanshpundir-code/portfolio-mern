import React, { useState } from 'react';

export default function Skills() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const toolCategories = [
    {
      id: 'programming',
      title: 'PROGRAMMING LANGUAGES',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: [
        { name: 'Python', level: 94, desc: 'Advanced • Data analysis, computer vision, algorithms, and rapid prototyping' },
        { name: 'C++', level: 92, desc: 'Advanced • Competitive robotics, low-latency control systems, ROS2 nodes, and OOP' },
        { name: 'C', level: 88, desc: 'Proficient • Embedded firmware, register-level hardware programming, memory optimization' },
      ],
    },
    {
      id: 'robotics',
      title: 'ROBOTICS & EMBEDDED SYSTEMS',
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
        { name: 'STM32 | ESP32', level: 90, desc: 'Advanced • 32-bit ARM Cortex & dual-core ESP architecture, Wi-Fi/BLE telemetry' },
        { name: 'Microcontrollers', level: 92, desc: 'Advanced • AVR, STM32, ESP series, GPIO, timers, UART, I2C, SPI' },
        { name: 'Embedded C/C++', level: 92, desc: 'Advanced • Bare-metal programming, interrupts, DMA, low-power modes' },
        { name: 'Motor Control & PID', level: 90, desc: 'Specialized • High-speed line follower PID tuning, quadrature encoders, PWM' },
        { name: 'Sensor Integration', level: 88, desc: 'Proficient • 16-channel IR array, IMU, ultrasonic, ToF distance sensors' },
        { name: 'Hardware-Software Integration', level: 91, desc: 'Advanced • Closed-loop feedback, actuators, driver circuits, edge computing' },
      ],
    },
    {
      id: 'hardware',
      title: 'HARDWARE & PCB DESIGN',
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
      skills: [
        { name: 'PCB Design', level: 88, desc: 'Proficient • Custom multi-layer board schematic & routing in EasyEDA, fabrication' },
        { name: 'Circuit Design', level: 90, desc: 'Advanced • Power regulation, MOSFET switching, filtering, signal integrity' },
        { name: 'Electronics Prototyping', level: 92, desc: 'Advanced • Breadboard validation, SMD soldering, oscilloscope debugging' },
      ],
    },
    {
      id: 'simulation',
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
      skills: [
        { name: 'ROS2', level: 85, desc: 'Proficient • Publisher/subscriber architecture, URDF modeling, Nav2 navigation' },
        { name: 'Gazebo', level: 82, desc: 'Proficient • Physics engine simulation, custom robot sensor and world plugin testing' },
        { name: 'RViz', level: 86, desc: 'Proficient • Real-time visualization of sensor clouds, TF transforms, odometry' },
      ],
    },
    {
      id: 'ml',
      title: 'MACHINE LEARNING & COMPUTER VISION',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11h-4V9.5C8.8 8.8 8 7.5 8 6a4 4 0 0 1 4-4z" />
          <path d="M 9 15v-2h6v2a3 3 0 0 1-6 0z" />
          <path d="M 6 18h12" />
        </svg>
      ),
      skills: [
        { name: 'OpenCV', level: 90, desc: 'Advanced • Real-time face detection, edge detection, Hough transforms, thresholding' },
        { name: 'Scikit-learn', level: 88, desc: 'Proficient • Model training, hyperparameter tuning, regression, feature pipelines' },
        { name: 'CNN (Deep Learning)', level: 86, desc: 'Proficient • Convolutional architectures for computer vision (98% MNIST digit accuracy)' },
        { name: 'Random Forest', level: 89, desc: 'Proficient • Ensemble classification for fish species & attendance analytics' },
      ],
    },
    {
      id: 'tools',
      title: 'TOOLS & HARDWARE PROTOTYPING',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      skills: [
        { name: 'EasyEDA', level: 92, desc: 'Advanced • Complete schematic capture, multi-layer routing, PCB order generation' },
        { name: 'Autodesk Fusion 360', level: 84, desc: 'Proficient • 3D CAD modeling, robot chassis mechanics, 3D printing export' },
        { name: 'Arduino IDE', level: 94, desc: 'Expert • Fast prototyping, library development, hardware-in-the-loop debugging' },
        { name: 'Git & GitHub', level: 90, desc: 'Advanced • Version control, modular repositories, open-source documentation' },
        { name: 'Linux / Ubuntu', level: 88, desc: 'Proficient • Command-line systems development, ROS2 environment, shell scripts' },
      ],
    },
  ];

  return (
    <section id="skills" className="chalkboard-section" style={{ padding: '5.5rem 0 6rem' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ color: '#ffffff', marginBottom: '2.5rem' }}>
          <svg className="sketch-squiggle" viewBox="0 0 35 15">
            <path d="M 2,12 Q 10,2 18,10 T 32,5" />
          </svg>
          <h2 style={{ color: '#ffffff' }}>Tools & Engineering Stack.</h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.75)',
              fontSize: '1.05rem',
              marginTop: '0.5rem',
              maxWidth: '680px',
            }}
          >
            Core proficiencies across embedded firmware, competitive robotics, hardware design, and applied machine learning. Hover over any skill bar for proficiency details.
          </p>
        </div>

        {/* 6 Columns / Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {toolCategories.map((cat) => (
            <div
              key={cat.id}
              className="chalkboard-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1.75rem',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1.5px solid rgba(255, 255, 255, 0.18)',
                borderRadius: '8px',
                backdropFilter: 'blur(4px)',
                position: 'relative',
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
                  borderBottom: '1px dashed rgba(255, 255, 255, 0.25)',
                }}
              >
                <div style={{ color: '#ffffff' }}>{cat.icon}</div>
                <h3
                  className="mono"
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    letterSpacing: '0.5px',
                    color: '#ffffff',
                    lineHeight: 1.3,
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skills with Animated Progress Bars & Tooltips */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.15rem',
                }}
              >
                {cat.skills.map((skill) => {
                  const tooltipKey = `${cat.id}-${skill.name}`;
                  const isHovered = activeTooltip === tooltipKey;

                  return (
                    <div
                      key={skill.name}
                      style={{ position: 'relative' }}
                      onMouseEnter={() => setActiveTooltip(tooltipKey)}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      {/* Name & Percentage */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          fontSize: '0.88rem',
                          color: '#ffffff',
                          fontWeight: 700,
                          marginBottom: '0.35rem',
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ opacity: 0.5 }}>&bull;</span>
                          {skill.name}
                        </span>
                        <span className="mono" style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div
                        style={{
                          width: '100%',
                          height: '7px',
                          backgroundColor: 'rgba(255, 255, 255, 0.12)',
                          borderRadius: '4px',
                          overflow: 'hidden',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          position: 'relative',
                        }}
                      >
                        <div
                          style={{
                            width: `${skill.level}%`,
                            height: '100%',
                            backgroundColor: '#ffffff',
                            borderRadius: '3px',
                            transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)',
                          }}
                        />
                      </div>

                      {/* Hover Tooltip showing Proficiency description */}
                      {isHovered && (
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '100%',
                            left: '0',
                            right: '0',
                            marginBottom: '6px',
                            backgroundColor: '#111111',
                            color: '#ffffff',
                            border: '1.5px solid rgba(255, 255, 255, 0.4)',
                            padding: '0.45rem 0.75rem',
                            borderRadius: '4px',
                            fontSize: '0.78rem',
                            lineHeight: 1.35,
                            zIndex: 10,
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6)',
                            pointerEvents: 'none',
                            animation: 'fadeInUp 0.15s ease-out',
                          }}
                        >
                          {skill.desc}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
