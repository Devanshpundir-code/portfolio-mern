import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status.error || status.success) {
      setStatus((prev) => ({ ...prev, error: null, success: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client validation
    if (!formData.name.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please enter your name.', message: '' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({ submitting: false, success: false, error: 'Please enter a valid email address.', message: '' });
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus({ submitting: false, success: false, error: 'Message must be at least 10 characters long.', message: '' });
      return;
    }

    try {
      setStatus({ submitting: true, success: false, error: null, message: '' });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          error: null,
          message: data.message || 'Message sent and stored in MongoDB successfully!',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: data.message || 'Failed to submit message. Please try again.',
          message: '',
        });
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Network error connecting to backend API. Please verify server is running.',
        message: '',
      });
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">// 06. GET IN TOUCH //</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Send a message directly to my inbox and MongoDB database via the Express REST API.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Direct contact info card */}
          <div className="sketch-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
              Let's build something remarkable
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Whether you have an inquiry about full-stack web engineering, custom PCB design, autonomous robotics, or potential job opportunities, I’d love to connect.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '2px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--bg-tertiary)',
                  }}
                >
                  📧
                </div>
                <div>
                  <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Email
                  </div>
                  <a
                    href="mailto:devanshpundir477@gmail.com"
                    style={{ color: 'var(--text-primary)', fontWeight: 700, textDecoration: 'none' }}
                  >
                    devanshpundir477@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '2px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--bg-tertiary)',
                  }}
                >
                  📍
                </div>
                <div>
                  <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Location
                  </div>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
                    Jodhpur / Jaipur, India
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '2px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--bg-tertiary)',
                  }}
                >
                  🐙
                </div>
                <div>
                  <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    GitHub Profile
                  </div>
                  <a
                    href="https://github.com/Devanshpundir-code"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--text-primary)', fontWeight: 700, textDecoration: 'none' }}
                  >
                    github.com/Devanshpundir-code
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Download CTAs */}
            <div style={{ borderTop: '1.5px dashed var(--border-color)', paddingTop: '1.5rem' }}>
              <div className="mono" style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                OFFICIAL RESUME DOWNLOADS:
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="/api/resume/pdf"
                  className="btn btn-primary btn-sm"
                  download="Devansh_Pundir_Resume.pdf"
                >
                  Download PDF
                </a>
                <a
                  href="/api/resume/docx"
                  className="btn btn-sm"
                  download="Devansh_Pundir_Resume.docx"
                >
                  Download Word (.docx)
                </a>
              </div>
            </div>
          </div>

          {/* Contact form card */}
          <div className="sketch-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>
              Send a Direct Message
            </h3>

            {status.success && (
              <div className="alert-box alert-success">
                <span>✓</span>
                <span>{status.message}</span>
              </div>
            )}

            {status.error && (
              <div className="alert-box alert-error">
                <span>⚠</span>
                <span>{status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. jane@company.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message or inquiry here (minimum 10 characters)..."
                  className="form-textarea"
                  required
                />
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.35rem' }}>
                  <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {formData.message.length} / 2000 chars
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="btn btn-primary"
                style={{ width: '100%', cursor: status.submitting ? 'not-allowed' : 'pointer' }}
              >
                {status.submitting ? (
                  <>
                    <span className="mono">Persisting to MongoDB...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span>&rarr;</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
