import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Certificates', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      return; // Navigate to home
    }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
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
        backdropFilter: 'blur(8px)',
        transition: 'background-color var(--transition-speed)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '75px',
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            color: 'var(--text-primary)',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
              border: 'var(--border-width) solid var(--border-color)',
              backgroundColor: 'var(--highlight-bg)',
              color: 'var(--highlight-text)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.15rem',
              boxShadow: '2px 2px 0px var(--border-color)',
            }}
          >
            DP
          </div>
          <div>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.3px', display: 'block' }}>
              Devansh Pundir
            </span>
            <span
              className="handwritten"
              style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginTop: '-3px' }}
            >
              MERN & Robotics
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            gap: '1.25rem',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontWeight: 700,
                fontSize: '0.92rem',
                padding: '0.35rem 0.6rem',
                borderRadius: '8px',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <ThemeToggle />

          {/* Quick PDF CV download */}
          <a
            href="/api/resume/pdf"
            className="btn btn-primary btn-sm desktop-only"
            download="Devansh_Pundir_Resume.pdf"
            title="Download verified PDF Resume from Express API"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            CV (PDF)
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="btn btn-sm mobile-menu-btn"
            aria-label="Toggle navigation menu"
            style={{ padding: '0.45rem 0.65rem' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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
            borderTop: 'var(--border-width) solid var(--border-color)',
            backgroundColor: 'var(--bg-secondary)',
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
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontWeight: 700,
                fontSize: '1.05rem',
                padding: '0.5rem 0',
                borderBottom: '1px dashed var(--border-color)',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <a
              href="/api/resume/pdf"
              className="btn btn-primary btn-sm"
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
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .desktop-only { display: inline-flex !important; }
        }
        @media (max-width: 859px) {
          .desktop-only { display: none !important; }
        }
      `}</style>
    </header>
  );
}
