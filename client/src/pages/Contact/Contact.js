import React from "react";
import "./Contact.css";
import Jello from "react-reveal/Jello";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xs-6 col-sm-12">
              <div className="card1">
                <Jello>
                  <div className="row border-line">
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg"
                      alt="contact"
                      className="card-image"
                    />
                  </div>
                </Jello>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="card2 d-flex card border-0 px-4 py-4">
                <div className="row">
                  <div className="row">
                    <h5 className="social-links">
                      Connect With
                      <a
                        href="https://www.linkedin.com/in/prakash-patasani-a1954b271/"
                        target="_blank"
                      >
                        <BsLinkedin
                          color="#0077b5"
                          size={30}
                          className="ms-2"
                        />
                      </a>
                      <a href="https://github.com/Prakash3942/" target="_blank">
                        <BsGithub color="black" size={30} className="ms-2" />
                      </a>
                      <a
                        href="https://www.facebook.com/prakash.patasani.35"
                        target="_blank"
                      >
                        <BsFacebook
                          color="#4867aa"
                          size={30}
                          className="ms-2"
                        />
                      </a>
                    </h5>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="write your message"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
