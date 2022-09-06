import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./navbar.scss";
const nav = () => {
  return (
    <nav className="container scrolled">
      <div>
        <a href="/">
          <p>Home</p>
        </a>
        <a href="/">
          <p>Projects</p>
        </a>
        <a href="/">
          <p>About</p>
        </a>
        <a href="/">
          <p className="nav-last">Contact</p>
        </a>
      </div>
      <div className="socials flex">
        <a href="https://github.com/AlejandroV01">
          <FontAwesomeIcon icon={faGithub} size="2x" className="fontawesome" />
        </a>
        <a href="https://www.linkedin.com/in/alejandro-vera-996579248/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="fontawesome"
          />
        </a>
        <a href="mailto:alexvera0109@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="fontawesome"
          />
        </a>
      </div>
    </nav>
  );
};

export default nav;
