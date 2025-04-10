import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQGpTWix_n7wkA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708659941571?e=1749686400&v=beta&t=SnRoXOngVEcDK9j01S9IFrs5InupsufmOF_aWnK5MDY" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Niranjan-Baur" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/niranjan-baur/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Niranjan Baur</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Niranjan-Baur" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/niranjan-baur/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;