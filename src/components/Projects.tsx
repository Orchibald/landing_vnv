import React, { useEffect, useState } from 'react';
import project1 from  '../images/project1.jpeg';
import project2 from  '../images/project2.jpeg';
import project3 from  '../images/project3.jpeg';

export const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    project1,
    project2,
    project3,
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const imageElement = document.getElementById('project-image');
    if (imageElement) {
      setTimeout(() => {
        imageElement.classList.add('fade-out');
        imageElement.classList.remove('fade-out');
      }, 500);
    }
  }, [currentSlide]);

  return (
    <div className="projects-container">
    <h2 className='headline'>Our Projects</h2>
    <div className="image-container">
      <button className="prev-button" onClick={prevSlide}>{'<'}</button>
      <img
          id="project-image"
          src={images[currentSlide]}
          alt={`Project ${currentSlide + 1}`}
        />      
        <button className="next-button" onClick={nextSlide}>{'>'}</button>
    </div>
  </div>
  );
};