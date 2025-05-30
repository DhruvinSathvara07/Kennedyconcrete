import React from "react";

const About = () => {
  return (
    <>
      <section>
        <div className="container-fluid d-flex justify-content-center align-items-center service-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <iframe
                  className="service-iframe"
                  width="615"
                  height="346"
                  src="https://www.youtube.com/embed/FDh_iSt7Ftw"
                  title="Kennedy Concrete Supplies Block and Building Materials 🧱"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="about">
                  <h2 className="about-title">KENNEDY CONCRETE</h2>

                  <h1 className="mt-3">
                    High-Quality Building Materials for Your Florida
                    Construction Projects
                  </h1>

                  <p className="mt-4">
                    At Kennedy Concrete, we provide top-notch building materials
                    tailored for your projects. Whether you’re working on
                    residential improvements or non-spec commercial jobs, we
                    make the construction process seamless and stress-free.
                  </p>

                  <div className="packges mt-5">
                    <div className="grid">
                      <div className="wallpackges" id="packages">
                        <h4>
                          <strong>Wall Packages</strong>
                        </h4>

                        <p>Build durable, lasting walls with:</p>

                        <ul className="list">
                          <li>
                            <p>Masonry Cementp </p>
                          </li>
                          <li>
                            <p>Sand</p>
                          </li>
                          <li>
                            <p>Rebar</p>
                          </li>
                          <li>
                            <p>Precast Lintels & Sills</p>
                          </li>
                          <li>
                            <p>Concrete Block</p>
                          </li>
                          <li>
                            <p>Wall Reinforcement</p>
                          </li>
                          <li>
                            <p>Premix Mortar</p>
                          </li>
                          <li>
                            <p>Truss Straps</p>
                          </li>
                          <li>
                            <p>Poly (Plastic Sheeting)</p>
                          </li>
                        </ul>
                      </div>
                      <div className="slabpackges" id="packages">
                        <h4>
                          <strong>Slab Packages</strong>
                        </h4>
                        <p>
                          Lay a strong foundation with premium materials such
                          as:
                        </p>
                        <ul className="list">
                          <li>
                            <p>Steel Mesh</p>
                          </li>
                          <li>
                            <p>Rebar</p>
                          </li>
                          <li>
                            <p>Foundation Chairs</p>
                          </li>
                          <li>
                            <p>Bar Ties</p>
                          </li>
                          <li>
                            <p>Rebar Caps</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
