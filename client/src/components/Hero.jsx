import React, { useEffect, useState } from 'react';

export default function Hero() {
  const roles = [
    'Robotics Developer',
    'Embedded Systems Engineer',
    'Hardware Prototyper',
    'Full-Stack Developer',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentWord = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(60);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(120);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="hero" style={{ padding: '4rem 0 3.5rem', position: 'relative' }}>
      <div className="container">
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Hero Text */}
          <div>
            {/* "Hello there!" sketch arrow */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginBottom: '0.5rem',
                position: 'relative',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M 5,16 Q 10,6 20,9" />
                <polyline points="15 5 21 9 17 14" />
              </svg>
              <span className="handwritten" style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                ~ Hello there! ~
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                fontWeight: 900,
                letterSpacing: '-1.5px',
                lineHeight: 1.08,
                marginBottom: '1.25rem',
              }}
            >
              Hi, I'm <br />
              <span>Devansh Pundir.</span>
            </h1>

            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '1.28rem', fontWeight: 800, lineHeight: 1.35 }}>
                Building intelligent machines.
              </div>
              <div style={{ fontSize: '1.28rem', fontWeight: 800, color: 'var(--text-secondary)', lineHeight: 1.35 }}>
                Designing the hardware behind innovation.
              </div>
            </div>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                maxWidth: '560px',
                lineHeight: 1.65,
                marginBottom: '1.5rem',
              }}
            >
              I'm a Computer Science Engineering student passionate about robotics, embedded systems, machine learning, and building practical hardware-software solutions.
            </p>

            {/* Typewriter Line */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.15rem',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
                marginBottom: '2rem',
                minHeight: '2rem',
              }}
            >
              <span style={{ color: 'var(--text-secondary)' }}>I am a</span>
              <span style={{ borderBottom: '2px solid currentColor', paddingBottom: '2px' }}>
                {displayText}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1.2em',
                  backgroundColor: 'currentColor',
                  animation: 'blink 0.8s infinite',
                }}
              ></span>
            </div>

            {/* CTA Buttons */}
            <div
              className="hero-buttons"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              <a href="#projects" className="btn btn-black">
                Explore My Projects &rarr;
              </a>

              <a
                href="/api/resume/pdf"
                className="btn"
                download="Devansh_Pundir_Resume.pdf"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download My Resume
              </a>

              <a
                href="#contact"
                className="handwritten"
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  borderBottom: '2px solid currentColor',
                  paddingBottom: '2px',
                  marginLeft: '0.25rem',
                }}
              >
                Let's Connect &rarr;
              </a>
            </div>

            {/* Bottom Status & Scroll Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2.5rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  className="animate-pulse-dot"
                  style={{
                    display: 'inline-block',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                  }}
                ></span>
                <span className="mono" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Open to opportunities | Jaipur, India
                </span>
              </div>

              {/* Scroll Mouse Doodle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-muted)' }}>
                <div
                  style={{
                    width: '18px',
                    height: '26px',
                    borderRadius: '10px',
                    border: '2px solid currentColor',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '4px',
                  }}
                >
                  <div
                    className="animate-scroll"
                    style={{
                      width: '3px',
                      height: '6px',
                      borderRadius: '2px',
                      backgroundColor: 'currentColor',
                    }}
                  ></div>
                </div>
                <span className="handwritten" style={{ fontSize: '0.85rem' }}>Scroll</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sketch Artwork */}
          <div className="hero-illustration" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div
              className="animate-float"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '430px',
              }}
            >
              {/* Floating Tag 1: Robotics */}
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '10px',
                  fontFamily: 'var(--font-sketch)',
                  fontSize: '1.15rem',
                  color: 'var(--text-secondary)',
                  transform: 'rotate(-8deg)',
                }}
              >
                ~ Robotics
              </div>

              {/* Floating Tag 2: Embedded Systems */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '30px',
                  fontFamily: 'var(--font-sketch)',
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  transform: 'rotate(6deg)',
                  textAlign: 'center',
                }}
              >
                Embedded<br />Systems
              </div>

              {/* Floating Tag 3: AI & ML */}
              <div
                style={{
                  position: 'absolute',
                  top: '75px',
                  right: '-10px',
                  fontFamily: 'var(--font-sketch)',
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  transform: 'rotate(10deg)',
                }}
              >
                AI & ML ~
              </div>

              {/* Speech bubble: Small ideas can build big things */}
              <div
                style={{
                  position: 'absolute',
                  top: '-35px',
                  right: '5px',
                  border: '2px solid var(--border-color)',
                  borderRadius: '180px 15px 170px 15px/15px 170px 15px 180px',
                  padding: '0.5rem 0.85rem',
                  backgroundColor: 'var(--bg-primary)',
                  boxShadow: '2px 2px 0px var(--border-color)',
                  maxWidth: '135px',
                  textAlign: 'center',
                  fontFamily: 'var(--font-sketch)',
                  fontSize: '0.82rem',
                  lineHeight: 1.25,
                }}
              >
                Small ideas can build big things.
              </div>

              {/* Main SVG Hand-Drawn Desk Sketch */}
              <svg viewBox="0 0 460 380" fill="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
                {/* Lightbulb Idea Doodle with Glow Animation */}
                <g className="animate-bulb" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M 270,40 Q 280,30 290,40 Q 295,50 287,55 L 273,55 Q 265,50 270,40 Z" />
                  <line x1="274" y1="58" x2="286" y2="58" />
                  <line x1="276" y1="61" x2="284" y2="61" />
                  {/* Rays */}
                  <line x1="280" y1="20" x2="280" y2="26" />
                  <line x1="265" y1="26" x2="270" y2="30" />
                  <line x1="295" y1="26" x2="290" y2="30" />
                </g>

                {/* Robotic Arm with Oscillating Joint Animation */}
                <g
                  style={{
                    animation: 'armOscillate 4.5s ease-in-out infinite',
                    transformOrigin: '350px 165px',
                  }}
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Joint 1 */}
                  <circle cx="350" cy="165" r="9" />
                  {/* Arm segment 1 */}
                  <line x1="346" y1="158" x2="315" y2="105" />
                  <line x1="354" y1="162" x2="323" y2="109" />
                  {/* Joint 2 */}
                  <circle cx="319" cy="107" r="8" />
                  {/* Arm segment 2 */}
                  <line x1="319" y1="100" x2="290" y2="70" />
                  {/* Gripper Wrist */}
                  <circle cx="286" cy="67" r="5" />
                  <path d="M 283,63 L 275,55" />
                  <path d="M 288,62 L 285,50" />
                </g>

                {/* Robotic Arm Static Base */}
                <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 330,190 L 370,190 L 365,175 L 335,175 Z" />
                </g>

                {/* Character Working at Desk */}
                <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  {/* Head */}
                  <circle cx="240" cy="120" r="28" fill="var(--bg-primary)" />
                  {/* Hair */}
                  <path d="M 215,115 Q 225,92 250,96 Q 265,99 268,114" strokeWidth="4" />
                  {/* Glasses */}
                  <circle cx="230" cy="118" r="8" strokeWidth="2" />
                  <circle cx="250" cy="118" r="8" strokeWidth="2" />
                  <line x1="238" y1="118" x2="242" y2="118" strokeWidth="2" />
                  {/* Smile */}
                  <path d="M 235,133 Q 242,138 248,133" strokeWidth="2" />
                  {/* Torso / Hoodie */}
                  <path d="M 205,175 Q 215,150 240,150 Q 265,150 275,175" fill="var(--bg-primary)" />
                  {/* Hoodie drawstrings */}
                  <line x1="234" y1="156" x2="234" y2="170" strokeWidth="1.5" />
                  <line x1="246" y1="156" x2="246" y2="170" strokeWidth="1.5" />
                  {/* Arms typing on laptop */}
                  <path d="M 205,175 Q 215,190 235,190" strokeWidth="3" />
                  <path d="M 275,175 Q 265,190 250,190" strokeWidth="3" />
                </g>

                {/* Laptop with </> display */}
                <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Screen */}
                  <polygon points="215,145 285,145 275,195 205,195" fill="var(--bg-primary)" />
                  {/* Base */}
                  <polygon points="195,195 285,195 300,205 180,205" fill="var(--bg-primary)" />
                  {/* </> Code on screen with subtle glow */}
                  <text x="245" y="175" textAnchor="middle" fontSize="18" fontWeight="800" fill="currentColor" fontFamily="monospace">
                    &lt;/&gt;
                  </text>
                </g>

                {/* Mobile Rover Robot with Wheels */}
                <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Body chassis */}
                  <rect x="180" y="240" width="55" height="25" rx="4" fill="var(--bg-primary)" />
                  {/* Top sensor camera */}
                  <rect x="195" y="225" width="25" height="15" rx="3" fill="var(--bg-primary)" />
                  <circle cx="203" cy="232" r="3" />
                  <circle cx="213" cy="232" r="3" />
                  {/* Animated Rotating Wheels */}
                  <g style={{ animation: 'rotateWheel 8s linear infinite', transformOrigin: '185px 268px' }}>
                    <circle cx="185" cy="268" r="9" fill="var(--bg-primary)" />
                    <line x1="185" y1="259" x2="185" y2="277" strokeWidth="1.5" />
                    <line x1="176" y1="268" x2="194" y2="268" strokeWidth="1.5" />
                  </g>
                  <g style={{ animation: 'rotateWheel 8s linear infinite', transformOrigin: '230px 268px' }}>
                    <circle cx="230" cy="268" r="9" fill="var(--bg-primary)" />
                    <line x1="230" y1="259" x2="230" y2="277" strokeWidth="1.5" />
                    <line x1="221" y1="268" x2="239" y2="268" strokeWidth="1.5" />
                  </g>
                  {/* Blinking Antenna */}
                  <line x1="215" y1="225" x2="225" y2="210" />
                  <circle className="animate-pulse-dot" cx="226" cy="209" r="3" fill="currentColor" />
                </g>

                {/* PCB / Circuit Breadboard on desk */}
                <g stroke="currentColor" strokeWidth="1.5">
                  <rect x="255" y="240" width="80" height="40" rx="3" strokeDasharray="3 2" fill="var(--bg-primary)" />
                  {/* Circuit traces */}
                  <polyline points="265,250 280,250 285,260 300,260" />
                  <polyline points="275,270 295,270 305,255 325,255" />
                  <circle cx="265" cy="250" r="2" fill="currentColor" />
                  <circle cx="300" cy="260" r="2" fill="currentColor" />
                  <circle cx="325" cy="255" r="2" fill="currentColor" />
                </g>

                {/* Desk Line */}
                <line x1="60" y1="285" x2="420" y2="285" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
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
