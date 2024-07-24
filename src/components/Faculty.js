import React from 'react';
import './Faculty.css';

function Faculty() {
  const handleViewDetails = (name) => {
    alert(`Viewing details for ${name}`);
  };

  const handleContact = (name) => {
    alert(`Contacting ${name}`);
  };

  const facultyList = [
    { name: 'John Doe', title: 'Principal', qualification: 'M.Ed', experience: '20 years of experience in educational administration.' },
    { name: 'Jane Smith', title: 'Vice Principal', qualification: 'M.Sc. in Physics', experience: '15 years of teaching experience.' },
    { name: 'Emily Johnson', title: 'English Teacher', qualification: 'M.A. in English', experience: '10 years of teaching experience.' },
    { name: 'Michael Brown', title: 'Mathematics Teacher', qualification: 'M.Sc. in Mathematics', experience: '8 years of teaching experience.' },
    { name: 'Sophia Davis', title: 'Science Teacher', qualification: 'M.Sc. in Chemistry', experience: '12 years of teaching experience.' },
    { name: 'David Wilson', title: 'Computer Science Teacher', qualification: 'B.Tech in Computer Science', experience: '5 years of teaching experience.' },
  ];

  return (
    <div className="faculty-container">
      <h2>Faculty</h2>
      <ul className="faculty-list">
        {facultyList.map((faculty) => (
          <li key={faculty.name} className="faculty-item">
            <div className="faculty-info">
              <strong>{faculty.name}</strong>: {faculty.title}, {faculty.qualification}, {faculty.experience}
            </div>
            <div className="faculty-actions">
              <button onClick={() => handleViewDetails(faculty.name)}>View Details</button>
              <button onClick={() => handleContact(faculty.name)}>Contact</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Faculty;
