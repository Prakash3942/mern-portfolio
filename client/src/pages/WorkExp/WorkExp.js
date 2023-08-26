import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiWorld } from "react-icons/gi";

const WorkExp = () => {
  return (
    <>
      <div className="container work" id="workExp">
        <div className="work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center">Work Experience</h2>
          <hr />

          <VerticalTimeline lineColor="grey">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#fff", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  grey" }}
              date="2022 - 2023"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<GiWorld />}
            >
              <h3 className="vertical-timeline-element-title">
                React Js Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Quotus Pvt.ltd
              </h4>
              <p>
                I am working with a Frontend Technologies such as React/Next js.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#fff", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  grey" }}
              date="2022 - 2023"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<GiWorld />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Alysian Technologies
              </h4>
              <p>I have done 3 month of Internship in Alysian Technologies.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
