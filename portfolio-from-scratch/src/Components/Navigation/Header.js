import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <ul className="navbar-nav">
              <a className="nav-link" href="https://example.com">
                <FontAwesomeIcon icon={faTwitter} style={{ color: 'inherit' }} />
              </a>
            <li className="nav-item">
              <a className="nav-link" href="https://example.com">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: 'inherit' }} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://example.com">
                <FontAwesomeIcon icon={faGithub} style={{ color: 'inherit' }} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
