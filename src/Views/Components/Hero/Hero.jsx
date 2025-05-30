import React from "react";
import "../../../assets/CSS/Hero.css";
const Hero = ({ title }) => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="hero">
            <div className="conatiner d-flex justify-content-center align-items-center h-100">
              <h2 className="text-center">{title}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
