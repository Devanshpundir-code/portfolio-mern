import React, { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = ['All', 'Frontend', 'Backend & DB', 'Tools & Tech', 'Hardware & IoT'];

  const skillsData = [
    // Frontend
    { name: 'React.js', level: 90, category: 'Frontend', note: 'Hooks, Context, React Router, Virtual DOM optimization' },
    { name: 'JavaScript (ES6+)', level: 88, category: 'Frontend', note: 'Async/Await, Closures, Event Loop, DOM manipulation' },
    { name: 'HTML5 & CSS3', level: 92, category: 'Frontend', note: 'Semantic HTML, Responsive Flexbox/Grid, Animations' },
    { name: 'React Router', level: 85, category: 'Frontend', note: 'Dynamic routing, nested routes, protected loaders' },
    
    // Backend & DB
    { name: 'Node.js', level: 85, category: 'Backend & DB', note: 'Event-driven architecture, file streaming, npm modules' },
    { name: 'Express.js', level: 88, category: 'Backend & DB', note: 'REST API routing, middleware, controllers, error handlers' },
    { name: 'MongoDB', level: 84, category: 'Backend & DB', note: 'Document modeling, indexing, aggregation pipelines' },
    { name: 'Mongoose', level: 86, category: 'Backend & DB', note: 'Schema design, validation hooks, population, queries' },

    // Tools & Tech
    { name: 'Git & GitHub', level: 90, category: 'Tools & Tech', note: 'Version control, branch workflows, pull requests' },
    { name: 'Postman', level: 88, category: 'Tools & Tech', note: 'REST endpoint testing, collection runners, environment mocking' },
    { name: 'Linux / Ubuntu', level: 82, category: 'Tools & Tech', note: 'Shell scripting, package management, service configuration' },
    { name: 'Vite & Bundlers', level: 85, category: 'Tools & Tech', note: 'Fast HMR, production build optimization, asset pipeline' },

    // Hardware & IoT
    { name: 'EasyEDA & PCB Design', level: 92, category: 'Hardware & IoT', note: 'Schematic capture, multi-layer routing, Gerber export' },
    { name: 'Autodesk Fusion 360', level: 80, category: 'Hardware & IoT', note: '3D modeling of robot chassis, component enclosures' },
    { name: 'Arduino IDE & C++', level: 86, category: 'Hardware & IoT', note: 'Firmware programming, sensor arrays, motor control' },
    { name: 'ROS2 & Gazebo', level: 78, category: 'Hardware & IoT', note: 'Robotic simulation, publisher/subscriber nodes, topics' },
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">// 02. CAPABILITIES //</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Interactive proficiency bars with category filters and detailed skill tooltips.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-sm ${activeCategory === cat ? 'btn-primary' : ''}`}
              style={{
                borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="sketch-card-sm"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{ position: 'relative' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '0.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontWeight: 800, fontSize: '1.05rem' }}>{skill.name}</span>
                  <span className="badge" style={{ fontSize: '0.7rem' }}>{skill.category}</span>
                </div>
                <span className="mono" style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress Track & Fill */}
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Hover Tooltip / Detail */}
              <div
                style={{
                  marginTop: '0.65rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <span style={{ color: 'var(--border-color)', fontWeight: 700 }}>&bull;</span>
                <span>{skill.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
