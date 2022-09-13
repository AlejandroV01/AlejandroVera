import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import "./Project.scss";
const Project = () => {
  const rightProjectAnimation = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const leftProjectAnimation = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const headerAnimation = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="projects">
      <motion.h1
        className="project-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerAnimation}
      >
        PROJECTS
      </motion.h1>
      {/* project with image on left side */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={rightProjectAnimation}
        className="project-div"
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
      </motion.div>
      {/* project with image on left side */}
      {/* *************************************** */}
      {/* project with image on right side */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={leftProjectAnimation}
        className="project-div"
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
      </motion.div>
      {/* project with image on right side */}
      {/* project with image on left side */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={rightProjectAnimation}
        className="project-div"
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
      </motion.div>
      {/* project with image on left side */}
      {/* project with image on right side */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={leftProjectAnimation}
        className="project-div"
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
      </motion.div>
      {/* project with image on right side */}
    </div>
  );
};

export default Project;
