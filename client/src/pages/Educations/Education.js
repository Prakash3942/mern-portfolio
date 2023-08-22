import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <>
      <div className="container education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center">Educations</h2>
        <hr />

        <VerticalTimeline lineColor="grey">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  grey" }}
            date="2018 - 2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in CSE</h3>
            <h4 className="vertical-timeline-element-subtitle">
              G.H.I.T.M, Odisha
            </h4>
            {/* <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  grey" }}
            date="2015 - 2017"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">12'th</h3>
            <h4 className="vertical-timeline-element-subtitle">
              S.C.S (A), Puri, Odisha
            </h4>
            {/* <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  grey" }}
            date="2015"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">10'th</h3>
            <h4 className="vertical-timeline-element-subtitle">
              J.G.B.N, Kanas, Puri
            </h4>
            {/* <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p> */}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
