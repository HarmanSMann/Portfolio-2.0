import React from "react";
import "./Hello.css";

const Hello = () => {
  const message = "Hello there, I'm Harman An Aspiring Software Developer";
  const handleHover = (e) => {
    // Randomize the transform values
    const randomTranslateX = Math.floor(Math.random() * 10) - 5;
    const randomTranslateY = Math.floor(Math.random() * 10) - 5;
    const randomScaleX = Math.random() * 0.9 + 2;
    const randomScaleY = Math.random() * 0.9 + 2;

    // Apply the randomized transform
    e.target.style.transform = `translateX(${randomTranslateX}px) translateY(${randomTranslateY}px) scaleX(${randomScaleX}) scaleY(${randomScaleY})`;
  };

  const splitText = (text) => {
    const characters = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        characters.push(" ");
      } else {
        characters.push(
          <span className="header-char" key={i}>
            {text[i]}
          </span>
        );
      }
    }
    return characters;
  };

  const handleHoverExit = (e) => {
    e.target.style.transform = "translateY(0)";
  };

  return (
    <>
      <div className="container">
        {splitText(message).map((char, index) => (
          <span
            key={index}
            className="header-char"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
          >
            {char}
          </span>
        ))}
        <div class="cube_container">
          <div class="cube">
            <div class="face front">Front-end</div>
            <div class="face back">Back-end</div>
            <div class="face right">Database</div>
            <div class="face left">DevOps</div>
            <div class="face top">Mobile</div>
            <div class="face bottom">UI/UX</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hello;
