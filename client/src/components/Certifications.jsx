import React, { useState } from 'react';

export default function Certifications() {
  const [showCredentials, setShowCredentials] = useState(false);

  const verifiedCertificates = [
    { title: 'Full-Stack Web Development', issuer: 'Meta / Coursera', year: '2024', link: 'https://coursera.org' },
    { title: 'Database Management Systems (NPTEL Elite)', issuer: 'IIT Kharagpur', year: '2024', link: 'https://nptel.ac.in' },
    { title: 'Embedded Firmware & Microcontrollers', issuer: 'LinkedIn Learning', year: '2023', link: 'https://linkedin.com' },
  ];

  return (
    <section id="achievements" style={{ padding: '4rem 0 5rem' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <svg className="sketch-squiggle" viewBox="0 0 35 15">
              <path d="M 2,12 Q 10,2 18,10 T 32,5" />
            </svg>
            <h2>Certifications & Achievements</h2>
          </div>

          <button
            onClick={() => setShowCredentials(!showCredentials)}
            className="btn btn-sm"
            style={{ fontSize: '0.82rem' }}
          >
            {showCredentials ? 'Show Placeholder Card' : 'View Verified Credentials (3)'}
          </button>
        </div>

        {/* Hand-Drawn Empty State Card matching the image */}
        {!showCredentials ? (
          <div
            style={{
              border: '2px dashed var(--border-color)',
              borderRadius: '16px',
              padding: '4rem 2rem',
              textAlign: 'center',
              backgroundColor: 'var(--bg-secondary)',
              maxWidth: '850px',
              margin: '0 auto',
            }}
          >
            {/* Sketch Certificate Icon */}
            <div style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="8" y1="8" x2="16" y2="8" />
                <line x1="8" y1="12" x2="13" y2="12" />
                {/* Medal ribbon on bottom right */}
                <circle cx="16" cy="15" r="2.5" />
                <path d="M 15,17 L 14,20 L 16,19 L 18,20 L 17,17" />
              </svg>
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              No certificates added yet.
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Add your certificates later to showcase your achievements.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {verifiedCertificates.map((cert, idx) => (
              <div key={idx} className="sketch-box" style={{ padding: '1.5rem' }}>
                <span className="badge-tag" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
                  {cert.year}
                </span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>{cert.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1rem' }}>
                  Issuer: {cert.issuer}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  Verify Online &rarr;
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
