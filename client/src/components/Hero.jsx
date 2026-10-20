import React, { useEffect, useState } from 'react';

export default function Hero() {
  const roles = [
    'MERN Stack Developer',
    'React & Node.js Specialist',
    'Hardware & PCB Designer',
    'Robotics & Firmware Enthusiast',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  useEffect(() => {
    const currentWord = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(50);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(110);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="hero" style={{ paddingTop: '5.5rem', paddingBottom: '6rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Text Content */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.25)',
                }}
              ></span>
              <span className="mono" style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                READY FOR HIRE &bull; MERN & HARDWARE
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.3rem, 5.5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
              Hello, I'm <br />
              <span
                style={{
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                Devansh Pundir
                {/* Hand-drawn underline squiggle */}
                <svg
                  viewBox="0 0 300 20"
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: '-12px',
                    width: '100%',
                    height: '14px',
                    stroke: 'var(--border-color)',
                    fill: 'none',
                    strokeWidth: 3,
                    strokeLinecap: 'round',
                  }}
                >
                  <path d="M 5,12 Q 75,2 150,12 T 295,12" />
                </svg>
              </span>
            </h1>

            {/* Typewriter Effect */}
            <div
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                minHeight: '2.4em',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span>{displayText}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '1.2em',
                  backgroundColor: 'var(--border-color)',
                  marginLeft: '4px',
                  animation: 'blink 0.9s infinite',
                }}
              ></span>
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '540px', marginBottom: '2.25rem' }}>
              Bridging the digital and physical worlds: Architecting high-performance full-stack web applications with{' '}
              <strong>MongoDB, Express, React, and Node.js</strong>, coupled with embedded robotics systems and custom PCB hardware.
            </p>

            {/* Call to Actions (CTAs) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a
                href="/api/resume/pdf"
                className="btn btn-primary"
                download="Devansh_Pundir_Resume.pdf"
                title="Download verified resume in PDF format"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download CV (PDF)
              </a>

              <a
                href="/api/resume/docx"
                className="btn"
                download="Devansh_Pundir_Resume.docx"
                title="Download verified resume in Word (.docx) format"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                Download Word (.docx)
              </a>

              <a href="#contact" className="btn" style={{ padding: '0.75rem 1.25rem' }}>
                Contact Me &rarr;
              </a>
            </div>
          </div>

          {/* Hand-Drawn Sketch Illustration / Identity Box */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="sketch-card"
              style={{
                width: '100%',
                maxWidth: '420px',
                textAlign: 'center',
                position: 'relative',
                transform: 'rotate(-1deg)',
              }}
            >
              {/* Corner Tape Accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '35%',
                  width: '90px',
                  height: '24px',
                  backgroundColor: 'var(--badge-bg)',
                  border: '1.5px solid var(--border-color)',
                  transform: 'rotate(2deg)',
                  boxShadow: '1px 1px 0px var(--border-color)',
                }}
              ></div>

              {/* Hand-Drawn Illustrated Avatar */}
              <div
                style={{
                  width: '180px',
                  height: '180px',
                  margin: '0.5rem auto 1.5rem',
                  borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                  border: 'var(--border-width) solid var(--border-color)',
                  backgroundColor: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '3px 3px 0px var(--border-color)',
                  overflow: 'hidden',
                }}
              >
                <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
                  {/* Head */}
                  <circle cx="50" cy="40" r="24" stroke="currentColor" strokeWidth="3" fill="var(--bg-secondary)" />
                  {/* Hair */}
                  <path d="M 28,34 Q 40,16 60,20 Q 72,24 74,36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  {/* Glasses */}
                  <circle cx="41" cy="38" r="7" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="59" cy="38" r="7" stroke="currentColor" strokeWidth="2.5" />
                  <line x1="48" y1="38" x2="52" y2="38" stroke="currentColor" strokeWidth="2.5" />
                  {/* Smile */}
                  <path d="M 44,49 Q 50,54 56,49" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Torso / Lab coat or Hoodie */}
                  <path d="M 24,90 Q 28,68 50,68 Q 72,68 76,90" stroke="currentColor" strokeWidth="3" fill="var(--bg-secondary)" />
                  <line x1="50" y1="68" x2="50" y2="90" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
                </svg>
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Devansh Pundir</h2>
              <p className="handwritten" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                Full-Stack MERN & Embedded Engineer
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  justifyContent: 'center',
                  marginTop: '1rem',
                }}
              >
                <span className="badge">#React.js</span>
                <span className="badge">#Node.js</span>
                <span className="badge">#Express</span>
                <span className="badge">#MongoDB</span>
                <span className="badge">#PCB_Design</span>
                <span className="badge">#ROS2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
