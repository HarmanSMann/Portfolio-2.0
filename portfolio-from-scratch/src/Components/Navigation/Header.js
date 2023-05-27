import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="https://example.com">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://example.com">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
