import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <header className="header bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="header-title text-white">My Dev Portfolio</div>
        <div className="socials">
          <a href="https://twitter.com/your_username">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://instagram.com/your_username">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
