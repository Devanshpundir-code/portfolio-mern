import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: 'var(--border-width) solid var(--border-color)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3.5rem 0 2rem',
        marginTop: '2rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px dashed var(--border-color)',
          }}
        >
          {/* Left Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                  border: '2px solid var(--border-color)',
                  backgroundColor: 'var(--highlight-bg)',
                  color: 'var(--highlight-text)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                }}
              >
                DP
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>Devansh Pundir</span>
            </div>
            <p className="handwritten" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Full-Stack MERN Portfolio &bull; Hand-Drawn Minimalist Visual Identity
            </p>
          </div>

          {/* Quick links & Back to top */}
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#about" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
              About
            </a>
            <a href="#skills" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
              Skills
            </a>
            <a href="#projects" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
              Projects
            </a>
            <a href="#timeline" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
              Timeline
            </a>
            <a href="#contact" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
              Contact
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-sm"
              title="Scroll to top of page"
              style={{ marginLeft: '0.5rem' }}
            >
              ↑ Top
            </button>
          </div>
        </div>

        {/* Bottom meta */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1.5rem',
            gap: '1rem',
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
          }}
        >
          <div className="mono">
            &copy; {new Date().getFullYear()} Devansh Pundir. Built with React.js, Express.js, Node.js & MongoDB.
          </div>
          <div className="mono">
            Handcrafted with 🖤 &bull; Black & White Sketch Identity
          </div>
        </div>
      </div>
    </footer>
  );
}
