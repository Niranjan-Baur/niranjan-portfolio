import React from "react";
import clrinetFrame from "../assets/images/clirnetFrame.png";
import doctubeFrame from "../assets/images/doctubeFrame.png";
import mymdFrame from "../assets/images/mymdFrame.png";
import bobAndBertsFrame from "../assets/images/bobBertsFrame.png";
import "../assets/styles/Project.scss";
import AndroidIcon from "@mui/icons-material/Android";
import { InfoOutlined } from "@mui/icons-material";

function Project() {
  const projects = [
    {
      title: "Clirnet",
      description: `I was actively involved in maintaining and improving both the React
            web application and the React Native mobile application. My
            responsibilities included optimizing performance, fixing bugs, and
            implementing new features to ensure a smooth and consistent user
            experience across platforms.`,
      image: clrinetFrame,
      link: "https://www.clirnet.com/",
      playstore:
        "https://play.google.com/store/apps/details?id=app.clirnet.com.clirnetapp",
    },
    {
      title: "doctube",
      description: `I maintain and enhance both the React-based WebView and React Native
            mobile apps, focusing on performance and feature optimization. I've
            implemented key features like ads, live streaming, in-video ads,
            user analytics, and multi-language support to improve functionality
            and user engagement.`,
      image: doctubeFrame,
      link: "https://doctube.com/",
      playstore: "https://play.google.com/store/apps/details?id=com.doctube",
    },
    {
      title: "myMD for doctors",
      description: `I was actively involved in maintaining and improving the React Native mobile application. My
            responsibilities included optimizing performance, fixing bugs, and
            implementing new features to ensure a smooth and consistent user
            experience across platforms.`,
      image: mymdFrame,
      link: "https://mymdindia.com/",
      playstore: "https://play.google.com/store/apps/details?id=com.mymddoctor",
    },
    {
      title: "Bob and Berts Loyalty",
      description: `Developed the Bob & Berts Loyalty App using React Native, Express, and MongoDB, enabling users to collect and redeem digital stamps for free items. Implemented secure API endpoints, real-time stamp updates, and seamless cross-platform functionality.`,
      image: bobAndBertsFrame,
      link: "https://bobandberts.co.uk/",
      playstore:
        "https://play.google.com/store/apps/details?id=loyalty.bobandberts",
    },
  ];
  return (
    <div className="projects-container" id="projects">
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <h1>Projects</h1>
        <a href="#">
          <InfoOutlined
            onClick={() => {
              alert(
                "Logos and trademarks belong to their respective owners. Used here for informational and portfolio purposes only."
              );
            }}
            titleAccess="** Logos and trademarks belong to their respective owners. Used here for informational and portfolio purposes only."
          />
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                className="zoom"
                alt="thumbnail"
                width="100%"
              />
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
              <a href={project.link} target="_blank" rel="noreferrer">
                <h2>{project.title}</h2>
              </a>
              {/* <a href={project.link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faExternalLink} />
              </a> */}
              <a href={project.playstore} target="_blank" rel="noreferrer">
                <AndroidIcon />
              </a>
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <p style={{ fontStyle: "italic", fontWeight: "bold", fontSize: 12 }}>
        ** Logos and trademarks belong to their respective owners. Used here for
        informational and portfolio purposes only.
      </p>
    </div>
  );
}

export default Project;
