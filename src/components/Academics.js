import React, { useState } from 'react';
import './Academics.css';

function Academics() {
  const [showPrimary, setShowPrimary] = useState(false);
  const [showSecondary, setShowSecondary] = useState(false);
  const [showSeniorSecondary, setShowSeniorSecondary] = useState(false);

  return (
    <div className="academics-container">
      <h2>Academics</h2>

      <h3>Curriculum</h3>

      <div className="section">
        <h4>
          Primary (Grades 1-5)
          <button onClick={() => setShowPrimary(!showPrimary)}>
            {showPrimary ? 'Hide' : 'View'}
          </button>
        </h4>
        {showPrimary && <p>English, Mathematics, Science, Social Studies, Art, Physical Education</p>}
      </div>

      <div className="section">
        <h4>
          Secondary (Grades 6-10)
          <button onClick={() => setShowSecondary(!showSecondary)}>
            {showSecondary ? 'Hide' : 'View'}
          </button>
        </h4>
        {showSecondary && <p>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>}
      </div>

      <div className="section">
        <h4>
          Senior Secondary (Grades 11-12)
          <button onClick={() => setShowSeniorSecondary(!showSeniorSecondary)}>
            {showSeniorSecondary ? 'Hide' : 'View'}
          </button>
        </h4>
        {showSeniorSecondary && (
          <div>
            <h5>Science Stream</h5>
            <p>Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
            <h5>Commerce Stream</h5>
            <p>Accountancy, Business Studies, Economics, Mathematics, English</p>
          </div>
        )}
      </div>

      <h3>Teaching Methodologies</h3>
      <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>

      <h3>Educational Resources</h3>
      <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
    </div>
  );
}

export default Academics;
