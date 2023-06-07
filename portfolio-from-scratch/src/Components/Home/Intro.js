import React, { useState, useEffect } from "react";
import "./Intro.css";

const Intro = () => {
  const jobTitles = ["Android", "Full Stack", "Data Analytics"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        setIsAnimating(false);
      }, 2000);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div className="intro-container">
        <p className="intro-text">I am an aspiring </p>
        <div className={`intro-message ${isAnimating ? "transition" : ""}`}>
          {jobTitles[currentTitleIndex]}
        </div>
        <p className="intro-text"> developer</p>
      </div>
    </div>
  );
};

export default Intro;
