import React from 'react';

export default function About() {
  return (
    <section id="about" style={{ padding: '4.5rem 0 5rem' }}>
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <svg className="sketch-squiggle" viewBox="0 0 35 15">
            <path d="M 2,12 Q 10,2 18,10 T 32,5" />
          </svg>
          <h2>A little about me.</h2>
        </div>

        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.65fr 1.35fr 1fr',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Sketch Character & Paper Airplane */}
          <div style={{ textAlign: 'center', position: 'relative' }}>
            {/* Paper Airplane Flying */}
            <div
              className="animate-plane"
              style={{
                position: 'absolute',
                top: '-15px',
                right: '15px',
                width: '38px',
                height: '38px',
              }}
            >
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5,20 35,5 25,35 18,22" />
                <line x1="35" y1="5" x2="18" y2="22" />
              </svg>
            </div>

            {/* Handwritten Motto on side */}
            <div
              className="handwritten"
              style={{
                position: 'absolute',
                top: '25px',
                left: '-10px',
                fontSize: '1rem',
                lineHeight: 1.25,
                transform: 'rotate(-8deg)',
                color: 'var(--text-secondary)',
                textAlign: 'left',
              }}
            >
              Better<br />
              Systems.<br />
              Brighter<br />
              Future.
            </div>

            {/* Hand-Drawn Character with backpack and glasses */}
            <svg viewBox="0 0 200 280" fill="none" style={{ maxWidth: '200px', margin: '0 auto', display: 'block' }}>
              <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Head */}
                <circle cx="105" cy="70" r="30" fill="var(--bg-primary)" />
                {/* Hair */}
                <path d="M 80,60 Q 95,30 120,38 Q 135,45 136,65" strokeWidth="4" />
                {/* Glasses */}
                <circle cx="95" cy="68" r="8" strokeWidth="2" />
                <circle cx="115" cy="68" r="8" strokeWidth="2" />
                <line x1="103" y1="68" x2="107" y2="68" strokeWidth="2" />
                {/* Smile & Eyes looking up */}
                <path d="M 100,85 Q 107,90 114,85" strokeWidth="2" />
                <circle cx="96" cy="66" r="2" fill="currentColor" />
                <circle cx="116" cy="66" r="2" fill="currentColor" />

                {/* Torso & Backpack */}
                <path d="M 80,120 Q 100,105 130,110 L 140,210 L 70,210 Z" fill="var(--bg-primary)" />
                {/* Backpack on shoulder */}
                <path d="M 68,130 Q 55,140 58,190 Q 65,205 75,205" strokeWidth="3" />
                <path d="M 75,130 Q 82,155 78,190" strokeWidth="2" strokeDasharray="3 3" />

                {/* Hoodie strings */}
                <line x1="100" y1="115" x2="100" y2="135" strokeWidth="1.5" />
                <line x1="110" y1="115" x2="110" y2="135" strokeWidth="1.5" />
              </g>
            </svg>
          </div>

          {/* Middle Column: Bio Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.7 }}>
              I'm a Computer Science Engineering student at <strong>JK Lakshmipat University, Jaipur</strong>, with a strong interest in robotics, embedded systems, and artificial intelligence.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.7 }}>
              I enjoy working at the intersection of hardware and software, designing PCBs, programming microcontrollers, developing robotic systems, and experimenting with machine learning.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.7 }}>
              Through competitive robotics and personal projects, I've developed a practical approach to problem-solving, rapid prototyping, and building systems that interact with the real world.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.7 }}>
              I'm also building <strong>Dyoraa Robotics</strong>, a venture focused on hardware and solutions for competitive and educational robotics.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.7 }}>
              My long-term goal is to develop intelligent, reliable, and innovative robotic systems.
            </p>
          </div>

          {/* Right Column: Key Details */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem',
              paddingLeft: '1rem',
              borderLeft: '1.5px dashed rgba(0,0,0,0.15)',
            }}
          >
            {/* Education */}
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div style={{ fontSize: '1.4rem', marginTop: '-2px' }}>🎓</div>
              <div>
                <div className="mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.5px' }}>
                  EDUCATION
                </div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>
                  B.Tech Computer Science and Engineering
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  JK Lakshmipat University, Jaipur
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div style={{ fontSize: '1.4rem', marginTop: '-2px' }}>⚡</div>
              <div>
                <div className="mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.5px' }}>
                  CURRENT STATUS
                </div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>
                  Student (4th Semester, B.Tech CSE)
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Active Fresher &bull; Open to Robotics & SDE Internships
                </div>
              </div>
            </div>

            {/* Focus */}
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div style={{ fontSize: '1.4rem', marginTop: '-2px' }}>🎯</div>
              <div>
                <div className="mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.5px' }}>
                  FOCUS
                </div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>
                  Robotics | Embedded Systems | AI
                </div>
              </div>
            </div>

            {/* Entrepreneurship */}
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div style={{ fontSize: '1.4rem', marginTop: '-2px' }}>🚀</div>
              <div>
                <div className="mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.5px' }}>
                  ENTREPRENEURSHIP
                </div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>
                  Dyoraa Robotics
                </div>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div style={{ fontSize: '1.4rem', marginTop: '-2px' }}>📍</div>
              <div>
                <div className="mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.5px' }}>
                  LOCATION
                </div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>
                  Jaipur, India
                </div>
              </div>
            </div>

            {/* Build . Learn . Create */}
            <div
              className="handwritten"
              style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                marginTop: '0.5rem',
                color: 'var(--text-primary)',
              }}
            >
              Build &bull; Learn &bull; Create
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
