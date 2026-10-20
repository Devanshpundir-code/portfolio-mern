import React from 'react';

export default function Timeline() {
  const events = [
    {
      period: '2024 - Present',
      type: 'Experience',
      title: 'Embedded Systems & PCB Design Intern',
      institution: 'Dyoraa Robotics',
      location: 'India',
      description:
        'Spearheaded the electrical schematic layout and PCB routing for autonomous mobile robots. Implemented high-current carrier boards, dual-channel motor driver stages, and 16-channel sensor arrays. Conducted hardware-in-the-loop simulation using ROS2 and Gazebo.',
      tags: ['EasyEDA', 'PCB Fabrication', 'Firmware', 'ROS2', 'Robotics'],
    },
    {
      period: '2023 - 2027 (Expected)',
      type: 'Education',
      title: 'Bachelor of Technology (B.Tech) - Computer Science & Engineering',
      institution: 'Engineering University',
      location: 'Rajasthan, India',
      description:
        'Pursuing core Computer Science curriculum focusing on Data Structures & Algorithms, Database Management Systems, Computer Networks, and Full-Stack Web Technologies (MERN). Active member of the university robotics club.',
      tags: ['Data Structures', 'DBMS', 'Web Architecture', 'Computer Networks'],
    },
    {
      period: '2022 - 2023',
      type: 'Education',
      title: 'Senior Secondary Education (Class XII - Science PCM)',
      institution: 'Central School',
      location: 'India',
      description:
        'Graduated with distinction in Physics, Chemistry, and Mathematics, fostering a strong foundation for software engineering and embedded circuit design.',
      tags: ['Physics', 'Mathematics', 'Computer Science'],
    },
  ];

  return (
    <section id="timeline">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">// 04. JOURNEY //</span>
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">
            Vertical chronological timeline illustrating academic background and hands-on industrial internships.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div
          style={{
            position: 'relative',
            maxWidth: '780px',
            margin: '0 auto',
            paddingLeft: '2.5rem',
          }}
        >
          {/* Vertical hand-drawn line */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              bottom: '10px',
              left: '12px',
              width: '3px',
              backgroundColor: 'var(--border-color)',
              borderStyle: 'solid',
            }}
          ></div>

          {events.map((item, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                marginBottom: '3rem',
              }}
            >
              {/* Hand-drawn circular timeline node */}
              <div
                style={{
                  position: 'absolute',
                  left: '-2.5rem',
                  top: '6px',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  border: 'var(--border-width) solid var(--border-color)',
                  backgroundColor: item.type === 'Experience' ? 'var(--highlight-bg)' : 'var(--bg-secondary)',
                  color: item.type === 'Experience' ? 'var(--highlight-text)' : 'var(--text-primary)',
                  boxShadow: '2px 2px 0px var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  zIndex: 2,
                }}
              >
                {item.type === 'Experience' ? '★' : '•'}
              </div>

              {/* Event Card */}
              <div className="sketch-card">
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '0.5rem',
                    gap: '0.5rem',
                  }}
                >
                  <span className="badge" style={{ backgroundColor: 'var(--bg-primary)' }}>
                    {item.period}
                  </span>
                  <span className="handwritten" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                    {item.type}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>
                  {item.title}
                </h3>

                <div
                  className="mono"
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'var(--text-secondary)',
                    marginBottom: '0.85rem',
                  }}
                >
                  {item.institution} &bull; {item.location}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {item.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {item.tags.map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
