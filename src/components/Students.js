import React from 'react';
import './Students.css';

function Students() {
  const handleLearnMore = (topic) => {
    alert(`Learn more about ${topic}`);
  };

  return (
    <div className="students-container">
      <h2>Life at Springdale</h2>
      
      <section>
        <h3>Extracurricular Activities</h3>
        <p>Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>
        <button className="btn" onClick={() => handleLearnMore('Extracurricular Activities')}>Learn More</button>
      </section>

      <section>
        <h3>Clubs and Societies</h3>
        <p>Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
        <button className="btn" onClick={() => handleLearnMore('Clubs and Societies')}>Learn More</button>
      </section>

      <section>
        <h3>Achievements</h3>
        <ul>
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
        <button className="btn" onClick={() => handleLearnMore('Achievements')}>Learn More</button>
      </section>

      <section>
        <h3>Student Council</h3>
        <ul>
          <li>President: Amy Parker, Grade 12</li>
          <li>Vice President: Rajiv Mehta, Grade 11</li>
          <li>Secretary: Lisa Wong, Grade 10</li>
        </ul>
        <button className="btn" onClick={() => handleLearnMore('Student Council')}>Learn More</button>
      </section>
    </div>
  );
}

export default Students;
