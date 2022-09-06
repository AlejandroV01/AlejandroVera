import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Project.scss";
const Project = () => {
  const [active, setActive] = useState(false);
  const [project1, setProject1] = useState(false);
  const [project2, setProject2] = useState(false);
  const [project3, setProject3] = useState(false);
  const [project4, setProject4] = useState(false);
  const animate = () => {
    let scrollY = window.scrollY;
    if (scrollY >= 125) {
      setActive(true);
    }
    if (scrollY >= 300) {
      setProject1(true);
    }
    if (scrollY >= 650) {
      setProject2(true);
    }
    if (scrollY >= 1150) {
      setProject3(true);
    }
    if (scrollY >= 1430) {
      setProject4(true);
    }
    console.log(scrollY);
  };

  window.addEventListener("scroll", animate);

  return (
    <div className="projects">
      <h1 className={active ? "h1-active project-title" : "project-title"}>
        PROJECTS
      </h1>
      {/* project with image on left side */}
      <div
        className={
          project1 ? "project-active-right project-div" : "project-div"
        }
      >
        <a href="/" className="project-image-div picture-right">
          <img
            src="https://miro.medium.com/max/1400/1*o5JioPIf2Y7fwXWvhLf_CA.png"
            alt=""
            className="project-image"
          />
        </a>
        <div className="project-information info-right">
          <h1>Pokemon API</h1>
          <div className="project-description desc-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              cum. Esse quibusdam error quisquam repellendus dicta deleniti
              iusto doloremque sapiente corrupti molestiae reprehenderit
              blanditiis nulla dolor, laboriosam mollitia ullam itaque?
            </p>
          </div>
          <div className="project-skills">
            <p>VS Code</p>
            <p>React.js</p>
            <p>Sass</p>
            <p>API</p>
            <p>VS Code</p>
            <p>VS Code</p>
          </div>
          <div className="links">
            <a href="https://github.com/AlejandroV01">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="fontawesome"
              />
            </a>
            <a href="/">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="2x"
                className="fontawesome"
              />
            </a>
          </div>
        </div>
      </div>
      {/* project with image on left side */}
      {/* *************************************** */}
      {/* project with image on right side */}
      <div
        className={project2 ? "project-active-left project-div" : "project-div"}
      >
        <a href="/" className="project-image-div picture-left">
          <img
            src="https://miro.medium.com/max/1400/1*o5JioPIf2Y7fwXWvhLf_CA.png"
            alt=""
            className="project-image"
          />
        </a>
        <div className="project-information info-left">
          <h1>Pokemon API</h1>
          <div className="project-description desc-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              cum. Esse quibusdam error quisquam repellendus dicta deleniti
              iusto doloremque sapiente corrupti molestiae reprehenderit
              blanditiis nulla dolor, laboriosam mollitia ullam itaque?
            </p>
          </div>
          <div className="project-skills">
            <p>VS Code</p>
            <p>React.js</p>
            <p>Sass</p>
            <p>API</p>
            <p>VS Code</p>
            <p>VS Code</p>
          </div>
          <div className="links">
            <a href="https://github.com/AlejandroV01">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="fontawesome"
              />
            </a>
            <a href="/">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="2x"
                className="fontawesome"
              />
            </a>
          </div>
        </div>
      </div>
      {/* project with image on right side */}
      {/* project with image on left side */}
      <div
        className={
          project3 ? "project-active-right project-div" : "project-div"
        }
      >
        <a href="/" className="project-image-div picture-right">
          <img
            src="https://miro.medium.com/max/1400/1*o5JioPIf2Y7fwXWvhLf_CA.png"
            alt=""
            className="project-image"
          />
        </a>
        <div className="project-information info-right">
          <h1>Pokemon API</h1>
          <div className="project-description desc-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              cum. Esse quibusdam error quisquam repellendus dicta deleniti
              iusto doloremque sapiente corrupti molestiae reprehenderit
              blanditiis nulla dolor, laboriosam mollitia ullam itaque?
            </p>
          </div>
          <div className="project-skills">
            <p>VS Code</p>
            <p>React.js</p>
            <p>Sass</p>
            <p>API</p>
            <p>VS Code</p>
            <p>VS Code</p>
          </div>
          <div className="links">
            <a href="https://github.com/AlejandroV01">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="fontawesome"
              />
            </a>
            <a href="/">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="2x"
                className="fontawesome"
              />
            </a>
          </div>
        </div>
      </div>
      {/* project with image on left side */}
      {/* project with image on right side */}
      <div
        className={project4 ? "project-active-left project-div" : "project-div"}
      >
        <a href="/" className="project-image-div picture-left">
          <img
            src="https://miro.medium.com/max/1400/1*o5JioPIf2Y7fwXWvhLf_CA.png"
            alt=""
            className="project-image"
          />
        </a>
        <div className="project-information info-left">
          <h1>Pokemon API</h1>
          <div className="project-description desc-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              cum. Esse quibusdam error quisquam repellendus dicta deleniti
              iusto doloremque sapiente corrupti molestiae reprehenderit
              blanditiis nulla dolor, laboriosam mollitia ullam itaque?
            </p>
          </div>
          <div className="project-skills">
            <p>VS Code</p>
            <p>React.js</p>
            <p>Sass</p>
            <p>API</p>
            <p>VS Code</p>
            <p>VS Code</p>
          </div>
          <div className="links">
            <a href="https://github.com/AlejandroV01">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="fontawesome"
              />
            </a>
            <a href="/">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="2x"
                className="fontawesome"
              />
            </a>
          </div>
        </div>
      </div>
      {/* project with image on right side */}
    </div>
  );
};

export default Project;
