import React, { useState } from "react";
import "./About.scss";
const About = () => {
  const [active, setActive] = useState(false);
  const [about, setAbout] = useState(false);
  const animate = () => {
    let scrollY = window.scrollY;
    if (scrollY >= 2190) {
      setActive(true);
    }
    if (scrollY >= 2400) {
      setAbout(true);
    }
  };

  window.addEventListener("scroll", animate);
  return (
    <div className="container">
      <h1 className={active ? "h1-active project-title" : "project-title"}>
        About
      </h1>
      <div className="about-container">
        <div className="about-left-side">
          <p>
            Hello! My name is Alejandro and I am an aspiring full-stack
            developer! I have been in love with web development ever since I
            made my first WordPress website. After that, building projects from
            zero to hero has been my passion. I also love working with others on
            projects where I have the opportunity to learn more about my craft.
          </p>
          <p>
            Today, I am currently on road to complete my Bachelor's Degree in
            Computer Science as a full-time student while absorbing as much
            knowledge of development as I can. While school is teaching my Java,
            I am teaching myself JavaScript, React.js, Git, SASS, MongoDB,
            Node.js, and much more!
          </p>
          <p>
            In my free time I love to work on personal projects of mine and go
            out to keep a healthy mental mind. I also enjoy going to school
            community events, programming events with Upsilon Pi Epsilon,
            building PC's, and taking my dog on walks.
          </p>
          <p>
            These are a few of the technologies that I have been working on
            recently:
          </p>
          <div className="current-skills">
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>APIs</li>
            </ul>
            <ul>
              <li>VSCode</li>
              <li>Java</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>
        <div className="about-right-side">
          <img
            src={require("../mesmall.png")}
            alt="myImage"
            className={about ? "image-animate about-pic" : "about-pic"}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
