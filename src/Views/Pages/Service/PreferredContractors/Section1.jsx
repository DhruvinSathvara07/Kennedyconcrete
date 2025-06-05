import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Section1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <>
      <section>
        <div className="container-fluid" id="preferredcontractors">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="container gap main-container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-center contract_title">
                    <strong>
                      Find Your Expert Concrete Project Team with
                      <span className="d-block d-md-inline d-lg-block">
                        Kennedy Concrete
                      </span>
                    </strong>
                  </h2>
                  <p>
                    Kennedy Concrete is committed to not only supplying
                    high-quality concrete for your projects but also ensuring
                    you have the right team to bring those projects to
                    completion. Our Preferred Concrete Contractors program is
                    designed to connect you with a network of trusted and
                    skilled professionals in all aspects of concrete
                    construction. From pump operators to concrete finishers,
                    we've got you covered.
                  </p>

                  <h4>
                    <strong>
                      How It <span>Works</span>:
                    </strong>
                  </h4>

                  <ol className="work-list">
                    <li className="list-item">
                      <p>
                        <strong>Share Your Project Details: </strong>
                        Use our simple form to provide your basic information
                        and a brief overview of your project.
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        <strong>Personalized Matching: </strong>
                        Based on your specific needs, Kennedy Concrete will pair
                        you with the ideal concrete contractors from our vetted
                        network, including specialists like pump operators and
                        finishers.
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        <strong>Seamless Collaboration:</strong>
                        With Kennedy providing the concrete, and a curated team
                        of experts for application and finishing, your project
                        is set for success from the ground up.
                      </p>
                    </li>
                  </ol>

                  <h4>
                    <strong>
                      Our <span> Promise</span>:
                    </strong>
                  </h4>

                  <ul className="work-list list-style">
                    <li className="list-item">
                      <p>
                        <strong>Comprehensive Expertise:</strong>
                        Our network includes a wide range of specialists in the
                        concrete industry, ensuring every phase of your project
                        is handled with expertise.
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        <strong>Quality at Every Step: </strong>
                        Kennedy Concrete supplies top-tier concrete to guarantee
                        the foundation of your project meets the highest
                        standards, complemented by exceptional workmanship from
                        our preferred contractors.
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        <strong>Trust and Reliability:</strong>
                        All contractors in our program are thoroughly vetted for
                        insurance, approval, and a proven track record of
                        successful projects.
                      </p>
                    </li>
                  </ul>

                  <h4>
                    <strong>
                      Connect with <span> Concrete Professionals</span>
                    </strong>
                  </h4>

                  <p id="connect-para">
                    Please fill out the form below, and a representative from
                    Kennedy Concrete will reach out to discuss your project and
                    connect you with the right professionals.
                  </p>

                  <div className="container">
                    <div className="container forms-container">
                      {submitted ? (
                        <div className="mt-4 mb-4">
                          <p className="text-secondary">
                            Thanks for submitting the form.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="form-control input"
                              id="firstName"
                              {...register("firstName")}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="form-control input"
                              id="lastName"
                              {...register("lastName")}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Email <span className="text-danger">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control input"
                              id="email"
                              {...register("email", {
                                required:
                                  "Please complete this required field.",
                              })}
                            />
                            {errors.email && (
                              <small className="text-danger">
                                {errors.email.message}
                              </small>
                            )}
                          </div>

                          <div className="mb-3">
                            <label
                              htmlFor="projectOverview"
                              className="form-label"
                            >
                              Project Overview
                            </label>
                            <textarea
                              className="form-control input"
                              id="projectOverview"
                              rows="3"
                              {...register("projectOverview", {
                                required:
                                  "Please complete all required fields.",
                              })}
                            ></textarea>
                            {errors.projectOverview && (
                              <small className="text-danger">
                                {errors.projectOverview.message}
                              </small>
                            )}
                          </div>

                          <button
                            type="submit"
                            className="btn btn-primary d-flex justify-content-center align-items-center mt-5 mb-4"
                          >
                            Submit
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                  <h4>
                    <strong>
                      Your Project Deserves the
                      <span> Best Team</span>
                    </strong>
                  </h4>

                  <p>
                    At Kennedy Concrete, we believe in a holistic approach to
                    your concrete projects. Providing the concrete is just the
                    start; pairing you with the right team of concrete
                    contractors for pumping, finishing, and more is our
                    commitment to ensuring your project's success.
                  </p>

                  <h4>
                    <strong>
                      Get Matched with <span>Concrete Professionals</span>
                    </strong>
                  </h4>

                  <p>
                    Let us take the guesswork out of assembling your project
                    team. With Kennedy Concrete's Preferred Concrete Contractors
                    program, you gain access to a network of professionals ready
                    to bring quality, efficiency, and excellence to your next
                    project.
                  </p>
                  <div className="d-flex justify-content-center align-items-center">
                    <iframe
                      width="1140"
                      height="641"
                      src="https://www.youtube.com/embed/rVA7zlOFPbc"
                      title="Need Concrete Finishers or Pumpers? Kennedy Concrete Has You Covered!"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
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

export default Section1;
