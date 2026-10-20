import React from 'react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Full-Stack Web Development (MERN)',
      issuer: 'Coursera / Meta',
      date: '2024',
      badge: 'Coursework',
      link: 'https://coursera.org/verify',
      description: 'Comprehensive specialization covering React, Node.js, Express, MongoDB, RESTful architectures, and security best practices.',
    },
    {
      title: 'Database Management Systems (DBMS)',
      issuer: 'NPTEL (IIT Kharagpur)',
      date: '2024',
      badge: 'NPTEL Elite',
      link: 'https://nptel.ac.in',
      description: 'Advanced relational schema design, SQL normalization, indexing strategies, transactions, and ACID integrity constraints.',
    },
    {
      title: 'Embedded Firmware & Microcontroller Interfacing',
      issuer: 'LinkedIn Learning',
      date: '2023',
      badge: 'Certified',
      link: 'https://linkedin.com/learning',
      description: 'Hands-on practical training in C++ firmware, hardware registers, interrupt service routines, and communication protocols (I2C, SPI, UART).',
    },
  ];

  const hackathons = [
    {
      title: 'LNMIIT National Hackathon',
      role: 'Hardware & IoT Lead Developer',
      award: 'Finalist & Special Recognition',
      year: '2025',
      description: 'Built an integrated telemetry and sensor grid platform connected to an Express backend with real-time alert dispatching.',
    },
    {
      title: 'JKLU Mini Hackathon',
      role: 'Full-Stack & Embedded Specialist',
      award: 'Top 5 Innovation Award',
      year: '2025',
      description: 'Engineered a low-cost automated tracking system combining sensor nodes with a responsive React dashboard.',
    },
    {
      title: 'Robotex International Line Follower & Sumo',
      role: 'Team Lead & PCB Designer',
      award: 'Regional Podium Winner',
      year: '2024',
      description: 'Designed and fabricated the custom Night Fury autonomous robotics carrier board achieving optimal lap timings.',
    },
  ];

  return (
    <section id="certifications" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: 'var(--border-width) solid var(--border-color)', borderBottom: 'var(--border-width) solid var(--border-color)' }}>
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">// 05. CREDENTIALS //</span>
          <h2 className="section-title">Certifications & Awards</h2>
          <p className="section-subtitle">
            Verified academic credentials, online certifications, and competitive hackathon achievements.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {/* Certifications column */}
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>📜 Verified Certifications</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {certifications.map((cert, idx) => (
                <div key={idx} className="sketch-card-sm">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span className="badge">{cert.badge}</span>
                    <span className="mono" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{cert.date}</span>
                  </div>

                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>{cert.title}</h4>
                  <div className="handwritten" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.65rem' }}>
                    Issued by: {cert.issuer}
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.85rem', lineHeight: 1.5 }}>
                    {cert.description}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                    }}
                  >
                    View Credential &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Awards column */}
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🏆 Hackathons & Competitions</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {hackathons.map((hack, idx) => (
                <div key={idx} className="sketch-card-sm">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span className="badge" style={{ backgroundColor: 'var(--highlight-bg)', color: 'var(--highlight-text)' }}>
                      {hack.award}
                    </span>
                    <span className="mono" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{hack.year}</span>
                  </div>

                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>{hack.title}</h4>
                  <div className="handwritten" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.65rem' }}>
                    Role: {hack.role}
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    {hack.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
