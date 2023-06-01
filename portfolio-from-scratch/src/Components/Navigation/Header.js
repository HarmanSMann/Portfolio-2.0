import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

const Header = () => {
  const title = "My Dev Portfolio";

  const handleHover = (e) => {
    // Randomize the transform values
    const randomTranslateX = Math.floor(Math.random() * 10) - 5;
    const randomTranslateY = Math.floor(Math.random() * 10) - 5;
    const randomScaleX = Math.random() * 0.3 + 2;
    const randomScaleY = Math.random() * 0.3 + 2;
  
    // Apply the randomized transform
    e.target.style.transform = `translateX(${randomTranslateX}px) translateY(${randomTranslateY}px) scaleX(${randomScaleX}) scaleY(${randomScaleY})`;
  };

  const handleHoverExit = (e) => {
    e.target.style.transform = "translateY(0)";
  };

  return (
    <header className="header bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="header-title text-white">
          {Array.from(title).map((char, index) => (
            <span
              key={index}
              className="header-title-char"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
            >
              {char}
            </span>
          ))}
        </h1>
        <div className="socials">
          <a href="https://www.linkedin.com/in/harman-s-mann/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/HarmanSMann">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
