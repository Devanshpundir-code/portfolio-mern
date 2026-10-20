import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const defaultProjects = [
  {
    id: 'night-fury-robot',
    title: 'Night Fury Autonomous High-Speed Robot',
    category: 'Hardware & IoT',
    techStack: ['C++', 'Arduino IDE', 'EasyEDA', 'ROS2', 'Gazebo', 'PCB Design'],
    description: 'Custom high-current autonomous robotic system with 16-channel sensor array, custom carrier board, dual DRV8874 motor driver stage, and high-frequency control algorithms.',
    github: 'https://github.com/Devanshpundir-code/NightFuryLineFollower',
    liveDemo: 'https://github.com/Devanshpundir-code/NightFuryLineFollower#demo',
    featured: true,
  },
  {
    id: 'mern-incident-platform',
    title: 'Incident Reporting & Management Platform',
    category: 'Full-Stack MERN',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API'],
    description: 'Full-stack MERN application for real-time incident tracking, automated status pipelines, and geolocation tagging with secure MongoDB persistence.',
    github: 'https://github.com/Devanshpundir-code/incident-reporting-api',
    liveDemo: 'https://github.com/Devanshpundir-code/incident-reporting-api#readme',
    featured: true,
  },
  {
    id: 'dyoraa-iot-dashboard',
    title: 'Dyoraa Industrial IoT Device Fleet Manager',
    category: 'Full-Stack & Hardware',
    techStack: ['React.js', 'Express.js', 'MongoDB', 'WebSockets', 'Python', 'ESP32'],
    description: 'Fleet management telemetry dashboard tracking robotic carrier boards, battery health, motor temperatures, and live sensor streams.',
    github: 'https://github.com/Devanshpundir-code/Share_bus_system',
    liveDemo: 'https://github.com/Devanshpundir-code/Share_bus_system#demo',
    featured: true,
  },
  {
    id: 'hand-drawn-portfolio',
    title: 'Hand-Drawn MERN Portfolio Website',
    category: 'Full-Stack MERN',
    techStack: ['React.js', 'React Router', 'Node.js', 'Express.js', 'MongoDB', 'CSS3'],
    description: 'A handcrafted black-and-white sketch portfolio website featuring typewriter animations, Express resume download streaming, and MongoDB contact persistence.',
    github: 'https://github.com/Devanshpundir-code/portfolio',
    liveDemo: 'http://localhost:5173',
    featured: true,
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(defaultProjects);
  const [selectedTech, setSelectedTech] = useState('All');
  const [loading, setLoading] = useState(false);

  // Fetch from Express API with fallback
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const url = selectedTech === 'All' 
          ? '/api/projects' 
          : `/api/projects?tech=${encodeURIComponent(selectedTech)}`;
        const res = await fetch(url);
        if (res.ok) {
          const json = await res.json();
          if (json.data && json.data.length > 0) {
            setProjects(json.data);
          }
        }
      } catch {
        // Fallback to local filter
        if (selectedTech === 'All') {
          setProjects(defaultProjects);
        } else {
          setProjects(
            defaultProjects.filter((p) =>
              p.techStack.some((t) => t.toLowerCase().includes(selectedTech.toLowerCase()))
            )
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [selectedTech]);

  const filterTags = ['All', 'React.js', 'Node.js', 'MongoDB', 'C++', 'EasyEDA'];

  return (
    <section id="projects" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: 'var(--border-width) solid var(--border-color)', borderBottom: 'var(--border-width) solid var(--border-color)' }}>
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">// 03. SHOWCASE //</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Interactive project cards featuring full-stack web platforms and autonomous robotics hardware.
          </p>
        </div>

        {/* Technology Filter Chips */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          <span className="mono" style={{ alignSelf: 'center', fontWeight: 700, fontSize: '0.85rem', marginRight: '0.3rem' }}>
            Filter by Tech:
          </span>
          {filterTags.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`btn btn-sm ${selectedTech === tech ? 'btn-primary' : ''}`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="sketch-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="badge" style={{ backgroundColor: 'var(--bg-primary)' }}>
                    {proj.category}
                  </span>
                  {proj.featured && (
                    <span className="handwritten" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                      ★ Featured
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  {proj.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {proj.description}
                </p>

                {/* Tech Stack Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
                  {proj.techStack.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  flexWrap: 'wrap',
                  borderTop: '1.5px dashed var(--border-color)',
                  paddingTop: '1rem',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm"
                    title="View GitHub Repository"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                  </a>

                  <a
                    href={proj.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                    title="View Live Demo"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live
                  </a>
                </div>

                <Link
                  to={`/project/${proj.id}`}
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                >
                  Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && !loading && (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            <p className="handwritten" style={{ fontSize: '1.25rem' }}>No projects found matching that filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
