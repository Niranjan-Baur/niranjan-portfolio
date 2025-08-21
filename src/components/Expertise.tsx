import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const frontendLabels = ["ReactJs", "TypeScript", "JavaScript", "HTML5", "CSS3"];

const backendLabels = ["Node", "MongoDB", "Express", "Postman"];

const mobileLabels = [
  "React Native",
  "Expo",
  "Cross-Platform",
  "Push Notifications",
  "Deep Linking",
  "App Store / Play Store",
  "UI/UX Optimization",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faMobileAlt} size="3x" />
            <h3>Mobile App Development</h3>
            <p>
              I specialize in building high-quality cross-platform mobile apps
              using
              <strong> React Native</strong>. From smooth UI/UX to seamless
              backend integration, I deliver apps that work flawlessly on both
              Android and iOS devices.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {mobileLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frontend Development</h3>
            <p>
              I've built a variety of cross-platform apps from scratch using
              <strong> React Native</strong>, Expo, and ReactJS - crafting
              smooth, user-friendly experiences across iOS, Android, and the
              web.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {frontendLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faNode} size="3x" />
            <h3>Backend Development</h3>
            <p>
              I'm growing my backend skills by building RESTful APIs using
              Node.js and Express, with hands-on experience in MongoDB for data
              handling and JWT for secure authentication.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {backendLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="https://drive.google.com/file/d/1jdIFM8BkNhQrjiCyy2c5TxGT7ZwYzwj4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                marginTop: "2rem",
                padding: "15px",
                borderRadius: "10px",
                width: "200px",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "bold",
                backgroundColor:"#8B1BC3",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Download CV
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
