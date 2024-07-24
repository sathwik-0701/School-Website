import React from 'react';
import './Admissions.css';  // Note the change in the CSS file name

function Admissions() {
  const handleDownload = () => {
    // Logic to download the admission form
    alert('Downloading the admission form...');
  };

  const handleMoreInfo = () => {
    // Logic to navigate to a page with more information
    alert('Navigating to more information...');
  };

  return (
    <div className="admissions-container">
      <h2>Admissions</h2>

      <div className="admission-section">
        <h3>Process</h3>
        <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        <button onClick={handleDownload}>Download Form</button>
      </div>

      <div className="admission-section">
        <h3>Criteria</h3>
        <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
        <button onClick={handleMoreInfo}>More Info</button>
      </div>

      <div className="admission-section">
        <h3>Important Dates</h3>
        <ul>
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </div>
    </div>
  );
}

export default Admissions;
