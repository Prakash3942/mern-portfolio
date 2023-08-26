import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center">Top Recent Projects</h2>
        <hr />
        <p className="p-2 text-center">
          👉 Here are my top 3 recent projects with live as and source code
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          accusantium suscipit hic quia fugiat. Incidunt aperiam totam nobis
          voluptas! Sapiente quisquam voluptatem nulla accusamus dolorum
          obcaecati sint vero incidunt nemo?
        </p>
        {/* card design  */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?w=740&t=st=1693042120~exp=1693042720~hmac=0f211dff87bda217924a4fd1728cce79eff23ce89fb0b8ab316b9562acf82f50"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly mt-3 m-auto">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase ">Blog App Website</h5>
                  </div>
                  <a
                    href="https://blogapp-3xr1.onrender.com"
                    target="_blank"
                    className="ad-btn"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>

          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mobile App</span>
                  <img
                    src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=612x612&w=0&k=20&c=EWKEahyVLY8iAHyirCCDESHRGW37lqUJ7In0SssNSLE="
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly mt-3 m-auto">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Faker Api</span>
                  <span className="card-detail-badge">Hooks</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase ">Shooping Cart</h5>
                  </div>
                  <a
                    href="https://react-shoppings-cart.netlify.app/"
                    target="_blank"
                    className="ad-btn"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>

          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly mt-3 m-auto">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase ">Todo App</h5>
                  </div>
                  <a
                    href="https://tubular-cannoli-f045ac.netlify.app"
                    className="ad-btn"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
          <Spin>
            {/* <div className="col-md-4 mt-5 ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=612x612&w=0&k=20&c=EWKEahyVLY8iAHyirCCDESHRGW37lqUJ7In0SssNSLE="
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly mt-3 m-auto">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase ">Portfolio Website</h5>
                  </div>
                  <a href="#" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div> */}
          </Spin>
          <Spin>
            {/* <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=612x612&w=0&k=20&c=EWKEahyVLY8iAHyirCCDESHRGW37lqUJ7In0SssNSLE="
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly mt-3 m-auto">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase ">Portfolio Website</h5>
                  </div>
                  <a href="#" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div> */}
          </Spin>
          <Spin>
            {/* <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=612x612&w=0&k=20&c=EWKEahyVLY8iAHyirCCDESHRGW37lqUJ7In0SssNSLE="
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly mt-3 m-auto">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase ">Portfolio Website</h5>
                  </div>
                  <a href="#" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div> */}
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
