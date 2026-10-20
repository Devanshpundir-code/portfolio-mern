import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      style={{
        borderTop: 'var(--border-width) solid var(--border-color)',
        backgroundColor: 'var(--bg-primary)',
        padding: '1.75rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          {/* Left Brand */}
          <div className="handwritten" style={{ fontSize: '1.4rem', fontWeight: 800 }}>
            Devansh Pundir
          </div>

          {/* Center Links */}
          <div
            style={{
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Controls: Theme Toggle & Top Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ThemeToggle />

            <button
              onClick={scrollToTop}
              className="btn btn-sm"
              title="Scroll to Top"
              style={{
                width: '36px',
                height: '36px',
                padding: 0,
                borderRadius: '50%',
              }}
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
