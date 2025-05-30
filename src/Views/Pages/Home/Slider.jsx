import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Components/Buttons/Button";
import SliderImg from "../../../assets/img/Slider1.png";
import SliderImg2 from "../../../assets/img/Slider.png";
import SliderImg3 from "../../../assets/img/Slider3.png";
import SliderImg4 from "../../../assets/img/Slider4.png";
import SliderImg5 from "../../../assets/img/KennedyOrlando.png";

const slides = [
  {
    image: SliderImg,
    title:
      "Kennedy Concrete Is The #1 Concrete Supplier In Central Florida On Google",
    description: "Proudly Serving Orlando, Ocala, Tampa, and Brevard County",
  },
  {
    image: SliderImg2,
    title: "Honoring Our Heroes With Exclusive Discounts",
    description:
      "Special discounts for veterans, military, and first responders on concrete, block, and building materials.",
  },
  {
    image: SliderImg5,
    title: "Orlando's Trusted Concrete Experts",
    description:
      "Kennedy Concrete supplies high-quality concrete, block, and building materials across Orlando with hassle-free scheduling.",
  },
  {
    image: SliderImg3,
    title: "Reliable Concrete Delivery in Tampa",
    description:
      "From concrete to block and building materials, Kennedy Concrete delivers on-time with personalized service in Tampa.",
  },
  {
    image: SliderImg4,
    title: "Reliable Concrete Solutions for Brevard County",
    description:
      "Kennedy Concrete provides top-quality concrete, block, and building materials for Brevard, ensuring your project stays on track.",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 200);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    if (index !== currentSlide) {
      setAnimate(false);
      setTimeout(() => {
        setCurrentSlide(index);
        setAnimate(true);
      }, 200);
    }
  };

  return (
    <>
      <div className="custom-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} />
          </div>
        ))}

        <div className="slide-content ms-0 ms-md-5">
          <h1
            className={animate ? "slide-in-right" : "slide-out-left"}
            style={{ animationDelay: "0.2s" }}
          >
            {slides[currentSlide].title}
          </h1>
          <p
            className={animate ? "slide-in-right" : "slide-out-left"}
            style={{ animationDelay: "0.4s" }}
          >
            {slides[currentSlide].description}
          </p>
          <div
            className={animate ? "slide-in-right" : "slide-out-left"}
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              bgColor="rgb(222,11,24)"
              textColor="#fff"
              hoverBgColor="#fff"
              hoverTextColor="#000"
              dotColor="#fff"
              icon={true}
            />
          </div>
        </div>

        <div className="custom-pagination">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            >
              {index === currentSlide && <span className="ring" />}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .slide-out-left {
          animation: slideOutLeft 0.2s ease-in forwards;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-30px);
          }
        }

        .slide-content h1,
        .slide-content p,
        .slide-content div {
          animation-fill-mode: both;
        }
      `}</style>
    </>
  );
}
