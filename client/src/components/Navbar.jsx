import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e, href) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      return;
    }
    const elem = document.querySelector(href);
    if (elem) {
      e.preventDefault();
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--bg-primary)',
        borderBottom: 'var(--border-width) solid var(--border-color)',
        backdropFilter: 'blur(10px)',
        transition: 'background-color 0.25s',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
        }}
      >
        {/* Brand Logo with hand-drawn pen stroke */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            textDecoration: 'none',
            color: 'var(--text-primary)',
          }}
        >
          <span
            className="handwritten"
            style={{
              fontSize: '1.65rem',
              fontWeight: 800,
              letterSpacing: '-0.5px',
            }}
          >
            Devansh Pundir
          </span>
          {/* Pen stroke squiggle */}
          <svg width="28" height="14" viewBox="0 0 30 15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M 2,10 Q 15,2 28,8" />
          </svg>
        </Link>

        {/* Center Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.4rem',
          }}
          className="desktop-links"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.92rem',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <ThemeToggle />

          <div className="desktop-cv-btn" style={{ display: 'none', alignItems: 'center', gap: '0.4rem' }}>
            <a
              href="/api/resume/pdf"
              className="btn btn-black btn-sm"
              download="Devansh_Pundir_Resume.pdf"
              title="Download verified resume in PDF format"
              style={{ padding: '0.45rem 0.85rem', gap: '0.35rem', fontSize: '0.82rem' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              CV (PDF)
            </a>
            <a
              href="/api/resume/docx"
              className="btn btn-sm"
              download="Devansh_Pundir_Resume.docx"
              title="Download verified resume in Word (.docx) format"
              style={{ padding: '0.45rem 0.85rem', gap: '0.35rem', fontSize: '0.82rem' }}
            >
              (.docx)
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="btn btn-sm mobile-toggle"
            aria-label="Toggle menu"
            style={{ padding: '0.4rem 0.6rem' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderTop: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '0.4rem 0',
                borderBottom: '1px dashed rgba(0,0,0,0.15)',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
            <a
              href="/api/resume/pdf"
              className="btn btn-black btn-sm"
              style={{ flex: 1 }}
              download="Devansh_Pundir_Resume.pdf"
            >
              Download PDF CV
            </a>
            <a
              href="/api/resume/docx"
              className="btn btn-sm"
              style={{ flex: 1 }}
              download="Devansh_Pundir_Resume.docx"
            >
              Download Word (.docx)
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-links { display: flex !important; }
          .desktop-cv-btn { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 899px) {
          .desktop-cv-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
