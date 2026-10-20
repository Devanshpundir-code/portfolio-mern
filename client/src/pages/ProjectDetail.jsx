import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        if (res.ok) {
          const json = await res.json();
          setProject(json.data);
        } else {
          // Fallback project details
          setProject({
            id,
            title: id.replace(/-/g, ' ').toUpperCase(),
            category: 'Full-Stack & Embedded',
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
            description: 'Full-stack application engineered with high performance, modular components, and reliable persistence.',
            longDescription: 'This project showcases complete integration of the MERN stack architecture with modern software engineering best practices, automated testing, and responsive design.',
            github: 'https://github.com/Devanshpundir-code',
            liveDemo: 'http://localhost:5173',
            highlights: ['Clean REST API design', 'Mongoose document persistence', 'Hand-drawn UI system'],
          });
        }
      } catch (err) {
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="mono" style={{ fontSize: '1.25rem' }}>Loading project details from Express API...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Project Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          We could not find the requested project with ID "{id}".
        </p>
        <Link to="/" className="btn btn-primary">
          &larr; Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '4.5rem 1.25rem 6rem' }}>
      <Link
        to="/#projects"
        className="btn btn-sm"
        style={{ marginBottom: '2.5rem', display: 'inline-flex' }}
      >
        &larr; Back to All Projects
      </Link>

      <div className="sketch-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span className="badge" style={{ fontSize: '0.85rem' }}>
            {project.category}
          </span>
          <span className="mono" style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Project ID: {project.id}
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1.25rem' }}>
          {project.title}
        </h1>

        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
          {project.longDescription || project.description}
        </p>

        {/* Tech Stack Chips */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 className="mono" style={{ fontSize: '0.95rem', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--text-muted)' }}>
            Technologies & Tools Utilized:
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.techStack.map((tech) => (
              <span key={tech} className="badge" style={{ padding: '0.35rem 0.85rem', fontSize: '0.85rem' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        {project.highlights && (
          <div style={{ marginBottom: '2.5rem', backgroundColor: 'var(--bg-tertiary)', padding: '1.5rem', borderRadius: '15px', border: '1.5px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>
              Key Architecture Highlights
            </h3>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {project.highlights.map((h, idx) => (
                <li key={idx}>
                  <strong>{h}</strong>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', borderTop: '1.5px dashed var(--border-color)', paddingTop: '1.75rem' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            View GitHub Source Code
          </a>

          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Open Live Demo Link
          </a>
        </div>
      </div>
    </div>
  );
}
