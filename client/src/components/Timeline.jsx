import React from 'react';

export default function Timeline() {
  const timelineItems = [
    {
      title: 'B.Tech Computer Science and Engineering',
      institution: 'JK Lakshmipat University, Jaipur',
      desc: 'Currently in 4th semester.',
    },
    {
      title: 'Robotics and Embedded Systems Development',
      institution: 'Hands-on experience through personal projects and competitive robotics.',
      desc: '',
    },
    {
      title: 'Dyoraa Robotics',
      institution: 'Building a robotics-focused venture for competitive and educational robotics.',
      desc: '',
    },
    {
      title: 'School Education',
      institution: 'Shivalik Academy, Dehradun, Uttarakhand.',
      desc: '',
    },
  ];

  const curiosityItems = [
    { text: 'Participation and wins in robotics competitions.', icon: '🏆' },
    { text: 'Practical embedded systems development.', icon: '⚡' },
    { text: 'PCB and circuit design.', icon: '📐' },
    { text: 'Machine learning experimentation.', icon: '🤖' },
    { text: 'Development of robotics products through Dyoraa Robotics.', icon: '⚙️' },
  ];

  return (
    <section id="experience" style={{ padding: '5rem 0 5.5rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Education & Experience Vertical Timeline */}
          <div>
            <div className="section-header">
              <svg className="sketch-squiggle" viewBox="0 0 35 15">
                <path d="M 2,12 Q 10,2 18,10 T 32,5" />
              </svg>
              <h2>Education & Experience.</h2>
            </div>

            <div style={{ position: 'relative', paddingLeft: '2.5rem', marginTop: '1.5rem' }}>
              {/* Vertical dotted line */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  bottom: '40px',
                  left: '11px',
                  width: '2px',
                  backgroundColor: 'var(--border-color)',
                }}
              ></div>

              {timelineItems.map((item, idx) => (
                <div key={idx} style={{ position: 'relative', marginBottom: '2.5rem' }}>
                  {/* Circular node */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-2.5rem',
                      top: '4px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: '2px solid var(--border-color)',
                      backgroundColor: 'var(--bg-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--border-color)',
                      }}
                    ></div>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                    {item.title}
                  </h3>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    {item.institution}
                  </div>
                  {item.desc && (
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                      {item.desc}
                    </div>
                  )}
                </div>
              ))}

              {/* Hand-drawn "Keep building ~>" doodle */}
              <div
                className="handwritten"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  transform: 'rotate(-4deg)',
                  color: 'var(--text-primary)',
                  marginLeft: '0.5rem',
                }}
              >
                <span>Keep building</span>
                <svg width="30" height="20" viewBox="0 0 35 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M 2,10 L 28,10" />
                  <polyline points="20,4 28,10 20,16" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Curiosity in motion */}
          <div>
            <div className="section-header">
              <svg className="sketch-squiggle" viewBox="0 0 35 15">
                <path d="M 2,12 Q 10,2 18,10 T 32,5" />
              </svg>
              <h2>Curiosity in motion.</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
              {curiosityItems.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      border: '1.5px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                      flexShrink: 0,
                      backgroundColor: 'var(--bg-secondary)',
                      boxShadow: '2px 2px 0px var(--border-color)',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--text-secondary)', paddingTop: '6px' }}>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
