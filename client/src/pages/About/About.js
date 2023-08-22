import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import aboutImg from "../../images/prakash.jpg";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={aboutImg} alt="About_Image" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I have completed my bachelor degree in Computer Science and
                Engineering. My aim is to become a successful professional in
                the field of Information Technology by utilizing my skills and
                enable further personal and professional development and work
                towards the prosperity of the organization. I have Knowledge of
                HTML/HTML5, CSS/CSS3, JavaScript(ES6) and popular frameworks
                such as React.Js/Next.Js, Redux/Redux-Toolkit, Node.js,
                Express.js & MongoDB Database. I'm looking for a position where
                I can use my skills and passion to make a positive impact on the
                world. I'm confident that I can be a valuable asset to your
                team.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
