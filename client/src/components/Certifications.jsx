import React, { useState } from 'react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 'technoxian',
      title: 'Certificate of Appreciation — World Robotics Championship',
      event: 'TechnoXian World Cup 2025',
      issuer: 'World Robotics Sports Organization (WRSO) & AICRA',
      recipient: 'Devansh Pundir',
      date: '30th Aug – 2nd Sep, 2025',
      achievement:
        'Awarded for successful participation in the Open For All Fastest Line Follower Challenge of TechnoXian World Cup 2025, held at Noida Stadium Complex, Noida (India).',
      badge: 'Certificate ID: WRC2954637011 Dyoraa',
      type: 'World Robotics Championship',
      icon: '🤖',
      image: '/certificates/technoxian-world-cup-2025.png',
      pdf: null,
      verifyUrl: 'https://technoxian.com',
      highlight: true,
      tag: 'World Cup 2025',
    },
    {
      id: 'techfest-finals',
      title: 'Certificate of Excellence — Techfest IIT Bombay (Finals)',
      event: 'Meshmerize Grand Finale, Techfest, IIT Bombay',
      issuer: 'Techfest, Indian Institute of Technology Bombay',
      recipient: 'Devansh Pundir',
      date: '22nd – 24th December, 2025',
      achievement:
        'Secured 6th position nationwide in the grand finale of the Meshmerize autonomous line-follower and maze robotics competition conducted by Techfest, IIT Bombay.',
      badge: '6th Position — IIT Bombay Grand Finale',
      type: 'IIT Bombay National Finals',
      icon: '🏆',
      image: '/certificates/techfest-iit-bombay-finals-meshmerize.png',
      pdf: null,
      verifyUrl: 'https://techfest.org',
      highlight: true,
      tag: 'National Top 6',
    },
    {
      id: 'techfest-delhi',
      title: 'Certificate of Excellence — Techfest Delhi Zone',
      event: 'Delhi Zone Zonal Qualifier, Techfest, IIT Bombay',
      issuer: 'Techfest, IIT Bombay (Technovation)',
      recipient: 'Devansh Pundir',
      date: '12th October 2025',
      achievement:
        'Secured 5th position in the Meshmerize zonal qualifier competition of Delhi Zone of Techfest, IIT Bombay, qualifying for the national finals.',
      badge: '5th Position — Delhi Zone Finalist',
      type: 'IIT Bombay Zonal Qualifiers',
      icon: '🎖️',
      image: '/certificates/techfest-delhi-zone-meshmerize.png',
      pdf: null,
      verifyUrl: 'https://techfest.org',
      highlight: false,
      tag: '5th Position Qualifier',
    },
    {
      id: 'coursera-c',
      title: 'Exploring C',
      event: 'University of Michigan Course Certificate',
      issuer: 'University of Michigan / Coursera',
      instructor: 'Charles Severance, Clinical Professor',
      recipient: 'Devansh Pundir',
      date: 'May 23, 2025',
      achievement:
        'Rigorous course covering C systems programming, dynamic memory management, pointer arithmetic, system architecture, and compilation.',
      badge: 'Credential ID: 1S167XI2WQB7',
      type: 'Systems Programming',
      icon: '📜',
      image: null,
      pdf: '/certificates/coursera-exploring-c.pdf',
      verifyUrl: 'https://coursera.org/verify/1S167XI2WQB7',
      highlight: false,
      tag: 'Coursera Verified',
    },
    {
      id: 'coursera-python',
      title: 'Python for Data Analysis: Pandas & NumPy',
      event: 'Coursera Project Network Certificate',
      issuer: 'Coursera Project Network',
      instructor: 'Ryan Ahmed, Ph.D., MBA',
      recipient: 'Devansh Pundir',
      date: 'Mar 15, 2025',
      achievement:
        'Hands-on data science coursework performing multidimensional matrix operations with NumPy and tabular structured analytics with Pandas.',
      badge: 'Credential ID: DWZOGEY7OU5Y',
      type: 'Data Science & Analytics',
      icon: '📊',
      image: null,
      pdf: '/certificates/coursera-python-data-analysis.pdf',
      verifyUrl: 'https://coursera.org/verify/DWZOGEY7OU5Y',
      highlight: false,
      tag: 'Coursera Verified',
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
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              marginTop: '0.5rem',
              maxWidth: '680px',
            }}
          >
            Verified credentials, competitive robotics trophies, and university certifications. Click any certificate card to preview the authentic official document.
          </p>
        </div>

        {/* Responsive Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.25rem',
            marginTop: '2.5rem',
          }}
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="sketch-box"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem',
                position: 'relative',
                borderWidth: cert.highlight ? '2.5px' : '2px',
                boxShadow: cert.highlight ? '6px 6px 0px var(--border-color)' : '4px 4px 0px var(--border-color)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              {/* Top Tag Ribbon */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  gap: '0.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{cert.icon}</span>
                  <span className="mono" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                    {cert.type}
                  </span>
                </div>
                <span
                  className="badge-tag"
                  style={{
                    backgroundColor: cert.highlight ? 'var(--text-primary)' : 'var(--bg-secondary)',
                    color: cert.highlight ? 'var(--bg-primary)' : 'var(--text-primary)',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                  }}
                >
                  {cert.tag}
                </span>
              </div>

              {/* Visual Certificate Preview Area */}
              <div
                onClick={() => setSelectedCert(cert)}
                style={{
                  width: '100%',
                  aspectRatio: '16/10',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1.5px dashed var(--border-color)',
                  borderRadius: '6px',
                  marginBottom: '1.25rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                title="Click to view full certificate"
              >
                {cert.image ? (
                  <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(0,0,0,0.75)',
                        color: '#fff',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      <span>🔍</span> Expand Certificate
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1.25rem',
                      textAlign: 'center',
                      background: 'radial-gradient(circle, var(--bg-secondary) 60%, var(--bg-primary) 100%)',
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.35rem' }}>{cert.icon}</div>
                    <div className="handwritten" style={{ fontSize: '1.15rem', fontWeight: 800 }}>
                      {cert.issuer}
                    </div>
                    <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      {cert.badge}
                    </div>
                    <div
                      style={{
                        marginTop: '0.75rem',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        backgroundColor: 'var(--border-color)',
                        color: 'var(--bg-primary)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '4px',
                      }}
                    >
                      📄 Click to View Certificate PDF
                    </div>
                  </div>
                )}
              </div>

              {/* Title and details */}
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.35rem', lineHeight: 1.35 }}>
                  {cert.title}
                </h3>

                <div
                  className="handwritten"
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                  }}
                >
                  {cert.event}
                </div>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                  }}
                >
                  {cert.achievement}
                </p>

                {cert.instructor && (
                  <div className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                    Instructor: {cert.instructor}
                  </div>
                )}

                <div className="mono" style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  {cert.badge}
                </div>
              </div>

              {/* Bottom Footer with Date & Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px dashed var(--border-color)',
                  paddingTop: '1rem',
                  marginTop: 'auto',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                }}
              >
                <span className="mono" style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  📅 {cert.date}
                </span>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="sketch-btn"
                    style={{
                      fontSize: '0.8rem',
                      padding: '0.35rem 0.75rem',
                      cursor: 'pointer',
                    }}
                  >
                    View Document
                  </button>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      borderBottom: '1.5px solid currentColor',
                      paddingBottom: '2px',
                    }}
                  >
                    Verify &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal Lightbox */}
        {selectedCert && (
          <div
            onClick={() => setSelectedCert(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.82)',
              backdropFilter: 'blur(5px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="sketch-box"
              style={{
                maxWidth: '920px',
                width: '100%',
                maxHeight: '92vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'var(--bg-primary)',
                padding: '1.5rem',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Modal Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  borderBottom: '2px solid var(--border-color)',
                  paddingBottom: '0.75rem',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>
                    {selectedCert.title}
                  </h3>
                  <div className="mono" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {selectedCert.badge} &bull; {selectedCert.date}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="sketch-btn"
                  style={{
                    fontSize: '1rem',
                    padding: '0.35rem 0.8rem',
                    lineHeight: 1,
                  }}
                  aria-label="Close Modal"
                >
                  ✕ Close
                </button>
              </div>

              {/* Modal Body */}
              <div
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '6px',
                  padding: '1rem',
                  border: '1.5px dashed var(--border-color)',
                }}
              >
                {selectedCert.image ? (
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '68vh',
                      objectFit: 'contain',
                      borderRadius: '4px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                    }}
                  />
                ) : (
                  <iframe
                    src={selectedCert.pdf}
                    title={selectedCert.title}
                    style={{
                      width: '100%',
                      height: '68vh',
                      border: 'none',
                      borderRadius: '4px',
                    }}
                  />
                )}
              </div>

              {/* Modal Footer */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '1rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px dashed var(--border-color)',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                }}
              >
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Recipient: <strong>{selectedCert.recipient}</strong> &bull; Issuer: {selectedCert.issuer}
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={selectedCert.image || selectedCert.pdf}
                    download
                    className="sketch-btn"
                    style={{
                      fontSize: '0.85rem',
                      padding: '0.45rem 1rem',
                      textDecoration: 'none',
                    }}
                  >
                    ⬇ Download Original
                  </a>
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="sketch-btn active"
                    style={{
                      fontSize: '0.85rem',
                      padding: '0.45rem 1rem',
                      textDecoration: 'none',
                    }}
                  >
                    Official Portal &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
