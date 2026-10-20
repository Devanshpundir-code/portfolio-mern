import React from 'react';

export default function About() {
  const stats = [
    { label: 'Current Status', value: 'Pre-final Year Student & Intern', icon: '🎓' },
    { label: 'Location', value: 'Jodhpur / Jaipur, India', icon: '📍' },
    { label: 'Industry Role', value: 'Embedded & PCB Intern at Dyoraa Robotics', icon: '🤖' },
    { label: 'Core Specialization', value: 'Full-Stack MERN + Hardware Integration', icon: '⚡' },
  ];

  return (
    <section id="about" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: 'var(--border-width) solid var(--border-color)', borderBottom: 'var(--border-width) solid var(--border-color)' }}>
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">// 01. INTRO //</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A developer who loves writing clean code and soldering physical silicon.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Bio text box */}
          <div className="sketch-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>Driven by Curiosity & Precision</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
              I am an engineering student with a deep passion for full-stack software development and embedded robotics.
              My journey involves building scalable web platforms with <strong>React.js, Node.js, Express, and MongoDB</strong>, while simultaneously architecting high-power PCB layouts in <strong>EasyEDA</strong> and programming microcontrollers for autonomous systems.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              During my internship at <strong>Dyoraa Robotics</strong>, I designed custom robot carrier boards, fabricated 16-channel IR sensor arrays, wrote firmware in C++/Arduino, and performed simulation in <strong>ROS2 & Gazebo</strong>. I bring that same level of rigor, reliability, and precision to web applications.
            </p>

            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <span className="badge">#ProblemSolver</span>
              <span className="badge">#ContinuousLearner</span>
              <span className="badge">#FullStackArchitect</span>
              <span className="badge">#CleanArchitecture</span>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="sketch-card-sm"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                }}
              >
                <div style={{ fontSize: '1.75rem' }}>{s.icon}</div>
                <div className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                  {s.label}
                </div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
