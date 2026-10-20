import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '8rem 1.25rem', textAlign: 'center' }}>
      <div className="sketch-card" style={{ maxWidth: '540px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div className="handwritten" style={{ fontSize: '5rem', fontWeight: 800, lineHeight: 1, marginBottom: '0.5rem' }}>
          404
        </div>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Page Not Found</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Oops! The page you are looking for has been erased or does not exist in this sketchbook.
        </p>
        <Link to="/" className="btn btn-primary">
          &larr; Return to Home Page
        </Link>
      </div>
    </div>
  );
}
