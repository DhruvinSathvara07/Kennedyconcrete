import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  // Watch the phone number input for live validation
  const phoneValue = watch("phonenumber");

  // Custom regex to allow only digits, + ( ) - . x and spaces
  const phonePattern = /^[0-9+().\-x\s]*$/;

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div>
        <div className="text-center mb-5" id="driverjob-form-container">
          <div className="mt-5">
            <h2>Join Our Team </h2>
          </div>
          <div>
            <h1>Join Our Team of Professionals</h1>
          </div>
        </div>

        <div style={{ padding: "30px" }}>
          <div className="container-fluid">
            <div className="container forms-container">
              <div className="row">
                <div className="col-lg-12">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
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
                        className="form-control"
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
                        className="form-control"
                        id="email"
                        {...register("email", {
                          required: "Please complete this required field.",
                        })}
                      />
                      {errors.email && (
                        <small className="text-danger">
                          {errors.email.message}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phonenumber" className="form-label">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phonenumber"
                        {...register("phonenumber", {
                          required: "Please complete this required field.",
                          pattern: {
                            value: phonePattern,
                            message:
                              "A valid phone number may only contain numbers, +()-. or x",
                          },
                        })}
                      />
                      {(!phonePattern.test(phoneValue || "") ||
                        errors.phonenumber) && (
                        <small className="text-danger">
                          {errors.phonenumber?.message ||
                            "A valid phone number may only contain numbers, +()-. or x"}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="locationofinterest"
                        className="form-label"
                      >
                        Location of Interest
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phonenumber"
                        {...register("phonenumber", {
                          required: "Please complete this required field.",
                          pattern: {
                            value: phonePattern,
                            message:
                              "A valid phone number may only contain numbers, +()-. or x",
                          },
                        })}
                      />
                      {(!phonePattern.test(phoneValue || "") ||
                        errors.phonenumber) && (
                        <small className="text-danger">
                          {errors.phonenumber?.message ||
                            "A valid phone number may only contain numbers, +()-. or x"}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="start" className="form-label">
                        When can you start?
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="start"
                        {...register("start", {
                          required: "Please complete this required field.",
                        })}
                      />
                      {errors.start && (
                        <small className="text-danger">
                          {errors.start.message}
                        </small>
                      )}
                    </div>

                    <label htmlFor="text">
                      By completing this form and submitting it, you consent to
                      receive e-mails, phone calls, and/or text/SMS messaging
                      pertaining to job opportunities at Kennedy Concrete.
                    </label>

                    <button
                      type="submit"
                      className="btn btn-primary d-flex justify-content-center align-items-center mt-5 mb-4"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
