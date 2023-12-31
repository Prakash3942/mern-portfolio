import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/PrakashPatasaniResume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = () => {
  const [theme, setTheme] = useTheme();

  // handhe theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={25} />
          ) : (
            <BsFillSunFill size={25} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "React Js Developer",
                    "Full Stack Web Developer",
                    "MERN Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-button">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=8117860723"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              {/* <button className="btn btn-hire">Hire Me</button> */}
              <a
                href={Resume}
                download="Prakash-Patasani.pdf"
                className="btn btn-cv"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
