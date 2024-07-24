import React from 'react';
import './Gallery.css';

function Gallery() {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="photos">
        <img src="http://www.iss.edu.sg/wp-content/uploads/2019/06/8K8A7227.jpg" alt="Students participating in various sports events" />
        <img src="https://media.istockphoto.com/id/1367328029/photo/girls-doing-a-presentation-about-the-solar-system-in-the-classroom.jpg?s=612x612&w=0&k=20&c=OHKEyrY51ID3kMT9Ycf9FtAopkg1TcpGKHGXiIJXWBw=" alt="Students presenting their science projects" />
        <img src="https://ius-sdb.com/wp-content/uploads/2023/03/IND-dbcchennai-001-1.jpg" alt="Students performing in the cultural fest" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOX2qkzUhYua1zO6kOqKtn4xLjue-opS4vYg&s" alt="A glimpse of our interactive classrooms" />
        <img src="https://www.shutterstock.com/image-photo/portrait-pupils-teacher-looking-page-260nw-66306511.jpg" alt="Students reading and studying in the school library" />
      </div>
      <div className="videos">
        <video controls>
          
          <source src="https://mixkit.co/free-stock-video/classroom-with-children-raising-their-hands-35954/" type="video/mp4" />
          Virtual tour of Springdale Public School
        </video>
        <video controls>
          <source src="/path/to/annual_function.mp4" type="video/mp4" />
          Highlights from the Annual Function 2023
        </video>
      </div>
    </div>
  );
}

export default Gallery;
