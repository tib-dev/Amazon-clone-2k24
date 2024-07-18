import React, { useState } from "react";
import "./Slides.module.css"; 

const SlideComponent = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slide-container">
      <div className="slide">
        <img
          src={items[currentIndex].imageUrl}
          alt={items[currentIndex].altText}
        />
      </div>
      <button onClick={goToPreviousSlide}>Previous</button>
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default SlideComponent;
