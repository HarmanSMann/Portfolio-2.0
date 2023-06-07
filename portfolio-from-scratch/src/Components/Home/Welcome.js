import React, { useEffect, useState } from "react";
import "./Welcome.css";

const WelcomePage = () => {
  const [isRibbonAnimated, setIsRibbonAnimated] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useEffect(() => {
    const ribbon = document.querySelector(".Ribbon");
    const messageContainer = document.querySelector(".MessageContainer");
    const message = document.querySelector(".Message");

    const ribbonWidth = messageContainer.offsetWidth;
    const ribbonHeight = messageContainer.offsetHeight;

    const handleAnimationEnd = () => {
      setIsRibbonAnimated(false);
      setIsAnimationFinished(true);
    };

    ribbon.addEventListener("animationend", handleAnimationEnd);

    setIsRibbonAnimated(true);

    return () => {
      ribbon.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <div className={`WelcomePage${isAnimationFinished ? " finished" : ""}`}>
      <div className={`Ribbon${isRibbonAnimated ? " animated" : ""}`} />
      <div className="MessageContainer">
        <h1 className="Message">Welcome to My Website</h1>
      </div>
    </div>
  );
};

export default WelcomePage;
