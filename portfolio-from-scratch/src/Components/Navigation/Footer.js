import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-navigation">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <button className="footer-button">
                <FontAwesomeIcon icon={faHome}/>
                <span className="footer-button-text">Home</span>
              </button>
            </li>
            <li className="footer-nav-item">
              <button className="footer-button">
                <FontAwesomeIcon icon={faPlayCircle} />
                <span className="footer-button-text">Video</span>
              </button>
            </li>
            <li className="footer-nav-item">
              <button className="footer-button">
                <FontAwesomeIcon icon={faUser} />
                <span className="footer-button-text">About</span>
              </button>
            </li>
            <li className="footer-nav-item">
              <button className="footer-button">
                <FontAwesomeIcon icon={faBriefcase} />
                <span className="footer-button-text">Portfolio</span>
              </button>
            </li>
            <li className="footer-nav-item">
              <button className="footer-button">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="footer-button-text">Contact</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
