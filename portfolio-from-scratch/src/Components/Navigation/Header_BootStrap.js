import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="header">
      <div className="container-fluid">
        <Navbar.Brand className="header-title">My Dev Portfolio</Navbar.Brand>
        <Nav className="socials">
          <Nav.Link href="https://twitter.com/your_username">
            <FontAwesomeIcon icon={faLinkedin} />
          </Nav.Link>
          <Nav.Link href="https://instagram.com/your_username">
            <FontAwesomeIcon icon={faGithub} />
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;