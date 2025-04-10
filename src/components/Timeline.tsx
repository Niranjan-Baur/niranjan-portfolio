import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  const experienceData = [
    {
      company: "CLIRNET Services",
      title: "Software Developer",
      location: "Kolkata, IND",
      date: "May, 2024 - present",
      description: `<p>
              I made a significant impact by converting a video streaming app
              from <strong>WebView to React Native</strong>, which resulted in a
              more seamless and responsive user experience.
            </p>`,
    },
    {
      company: "Ruby Technology",
      title: "App Developer",
      location: "Kolkata, IND",
      date: "Oct, 2023 - May, 2024",
      description: `            <p>
              I successfully converted legacy
              <strong> Ionic applications</strong> into,
              <strong> React Native</strong> significantly improving both the
              performance and user experience of these apps. This transition not
              only modernized the apps but also made them more responsive and
              better suited to meet user needs, leading to enhanced overall
              satisfaction and engagement.
            </p>`,
    },
    {
      company: "Bitcanny Technologies",
      title: "Software Developer Intern + Trainee",
      location: "Kolkata, IND",
      date: "Sept, 2022 - Sept, 2023",
      description: `<p>
              Played a key role in developing web applications by implementing
              <strong> dynamic data fetching</strong>,
              <strong> advanced state management</strong>, and robust
              <strong> authentication systems</strong>, leading to flexible,
              secure, and scalable applications with enhanced user experience.
            </p>`,
    },
  ];

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>
          {experienceData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date={item.date}
              iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h3 className="vertical-timeline-element-title">
                    {item.company}
                  </h3>
                  {item.title && (
                    <h6 className="vertical-timeline-element-title">
                      {item.title}
                    </h6>
                  )}
                </div>
                <h6 className="vertical-timeline-element-subtitle">
                  {item.location}
                </h6>
              </div>
              <p dangerouslySetInnerHTML={{ __html: item.description }} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
