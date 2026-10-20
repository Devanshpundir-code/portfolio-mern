import React from 'react';

export default function Certifications() {
  const certificates = [
    {
      title: 'Certificate of Excellence — Meshmerize',
      event: 'Delhi Zone, Techfest, IIT Bombay',
      issuer: 'Techfest, IIT Bombay (Technovation)',
      recipient: 'Devansh Pundir',
      date: '12th October 2025',
      achievement: 'Secured 5th position in the Meshmerize competition of Delhi Zone of Techfest, IIT Bombay',
      badge: 'IIT Bombay Finalist',
      type: 'Excellence',
      icon: '🏆',
      link: 'https://techfest.org',
    },
    {
      title: 'Certificate of Appreciation — World Robotics Championship',
      event: 'TechnoXian World Cup 2025',
      issuer: 'World Robotics Sports Organization (WRSO)',
      recipient: 'Devansh Pundir',
      date: '30th Aug – 2nd Sep, 2025',
      achievement: 'Successful participation in Open For All Fastest Line Follower Challenge at Noida Stadium Complex, Noida (India)',
      badge: 'Certificate ID: WRC2954637011',
      type: 'Robotics Championship',
      icon: '🤖',
      link: 'https://technoxian.com',
    },
    {
      title: 'Exploring C',
      event: 'University of Michigan Course Certificate',
      issuer: 'University of Michigan / Coursera',
      instructor: 'Charles Severance, Clinical Professor',
      recipient: 'Devansh Pundir',
      date: 'May 23, 2025',
      achievement: 'Comprehensive course covering C systems programming, pointer mechanics, dynamic memory allocation, and compilation.',
      badge: 'Coursera Verified',
      type: 'Systems Programming',
      icon: '📜',
      link: 'https://coursera.org/verify/1S167XI2WQB7',
    },
    {
      title: 'Python for Data Analysis: Pandas & NumPy',
      event: 'Coursera Project Network Certificate',
      issuer: 'Coursera Project Network',
      instructor: 'Ryan Ahmed, Adjunct Professor',
      recipient: 'Devansh Pundir',
      date: 'Mar 15, 2025',
      achievement: 'Applied hands-on data manipulation, matrix computations with NumPy, and structured time-series analysis with Pandas.',
      badge: 'Coursera Verified',
      type: 'Data Science',
      icon: '📊',
      link: 'https://coursera.org/verify/DWZOGEY7OU5Y',
    },
  ];

  return (
    <section id="achievements" style={{ padding: '5rem 0 5.5rem' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <svg className="sketch-squiggle" viewBox="0 0 35 15">
            <path d="M 2,12 Q 10,2 18,10 T 32,5" />
          </svg>
          <h2>Certifications & Achievements</h2>
        </div>

        {/* 4 Cards Grid (2x2 on desktop) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="sketch-box"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
              }}
            >
              <div>
                {/* Header ribbon */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <span style={{ fontSize: '1.4rem' }}>{cert.icon}</span>
                    <span className="mono" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                      {cert.type}
                    </span>
                  </div>
                  <span className="badge-tag" style={{ backgroundColor: 'var(--bg-secondary)', fontWeight: 700 }}>
                    {cert.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.35rem', lineHeight: 1.3 }}>
                  {cert.title}
                </h3>

                <div
                  className="handwritten"
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 700,
                    marginBottom: '0.85rem',
                  }}
                >
                  {cert.event}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {cert.achievement}
                </p>

                {cert.instructor && (
                  <div className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                    Instructor: {cert.instructor}
                  </div>
                )}
              </div>

              {/* Bottom Footer with Date & Verify Link */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px dashed var(--border-color)',
                  paddingTop: '1rem',
                  marginTop: '0.5rem',
                }}
              >
                <span className="mono" style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  📅 {cert.date}
                </span>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    borderBottom: '1.5px solid currentColor',
                    paddingBottom: '2px',
                  }}
                >
                  Verify Certificate &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
