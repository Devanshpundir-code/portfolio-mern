import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status.error || status.success) {
      setStatus({ loading: false, success: false, error: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus({ loading: false, success: false, error: 'Please provide your name.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({ loading: false, success: false, error: 'Please provide a valid email address.' });
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus({ loading: false, success: false, error: 'Message must be at least 10 characters long.' });
      return;
    }

    try {
      setStatus({ loading: true, success: false, error: null });

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          error: null,
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.message || 'Failed to submit message. Please try again.',
        });
      }
    } catch {
      setStatus({
        loading: false,
        success: false,
        error: 'Unable to connect to Express backend. Please ensure the server is active.',
      });
    }
  };

  return (
    <section id="contact" className="chalkboard-section" style={{ padding: '5.5rem 0 6rem' }}>
      <div className="container">
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr 0.85fr',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Direct Inquiries */}
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, marginBottom: '1rem' }}>
              Have an interesting idea?
            </h2>

            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Whether it's robotics, intelligent systems, or a project worth building, I'd love to hear from you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {/* Email */}
              <a
                href="mailto:devansh7570@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                }}
              >
                <span>✉️</span>
                <span>devansh7570@gmail.com</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                }}
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Devanshpundir-code"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                }}
              >
                <span>🐙</span>
                <span>GitHub</span>
              </a>

              {/* Website */}
              <a
                href="https://www.dyoraarobotics.in"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                }}
              >
                <span>🌐</span>
                <span>www.dyoraarobotics.in</span>
              </a>
            </div>
          </div>

          {/* Center Column: Form & Cartoon Illustration */}
          <div style={{ position: 'relative' }}>
            {/* Hand-Drawn Speech Bubble */}
            <div
              className="handwritten animate-float"
              style={{
                position: 'absolute',
                top: '-45px',
                left: '-20px',
                border: '1.5px solid #ffffff',
                borderRadius: '160px 20px 170px 20px/20px 170px 20px 160px',
                padding: '0.4rem 0.85rem',
                backgroundColor: '#111215',
                color: '#ffffff',
                fontSize: '0.88rem',
                textAlign: 'center',
                lineHeight: 1.25,
                zIndex: 2,
              }}
            >
              Let's build<br />something great!
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {status.success && (
                <div
                  style={{
                    backgroundColor: 'rgba(34, 197, 94, 0.15)',
                    border: '1.5px solid #22c55e',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: '#22c55e',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                  }}
                >
                  ✓ Thank you! Message sent and saved to MongoDB database.
                </div>
              )}

              {status.error && (
                <div
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.15)',
                    border: '1.5px solid #ef4444',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: '#ef4444',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                  }}
                >
                  ⚠ {status.error}
                </div>
              )}

              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  className="chalkboard-input"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="chalkboard-input"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message *"
                  className="chalkboard-textarea"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="btn"
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: '#ffffff',
                  color: '#111215',
                  border: 'none',
                  boxShadow: 'none',
                  padding: '0.65rem 1.6rem',
                  cursor: status.loading ? 'wait' : 'pointer',
                }}
              >
                {status.loading ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>

          {/* Right Column: Sketch Laptop & Formula */}
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <svg viewBox="0 0 240 220" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', maxWidth: '240px', margin: '0 auto' }}>
              {/* Lightbulb Idea */}
              <circle cx="120" cy="35" r="14" />
              <line x1="114" y1="49" x2="126" y2="49" />
              <line x1="120" y1="12" x2="120" y2="18" />
              <line x1="102" y1="20" x2="108" y2="24" />
              <line x1="138" y1="20" x2="132" y2="24" />

              {/* Laptop with </> */}
              <polygon points="40,90 200,90 190,160 50,160" />
              <polygon points="30,160 210,160 225,175 15,175" />
              <text x="120" y="132" textAnchor="middle" fontSize="24" fontWeight="800" fill="#ffffff" stroke="none" fontFamily="monospace">
                &lt;/&gt;
              </text>

              {/* Coffee mug */}
              <rect x="25" y="145" width="16" height="20" rx="3" />
              <path d="M 41,150 Q 48,155 41,160" />
            </svg>

            {/* Ideas -> Products -> Impact */}
            <div
              className="handwritten"
              style={{
                marginTop: '1rem',
                fontSize: '1.25rem',
                color: '#ffffff',
                lineHeight: 1.4,
              }}
            >
              Ideas &rarr; Products &rarr; Impact
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
