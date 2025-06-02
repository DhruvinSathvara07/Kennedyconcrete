import React from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";
const Sidewalk = () => {
  return (
    <>
      <Hero title={"Sidewalk"} />

      <VideoCard
        padding={"mt-5 mb-5"}
        className="d-flex justify-content-center align-items-center"
        video_link={"https://www.youtube.com/embed/5zbd0QCdKm8"}
        video_text={"SIDEWALK"}
        video_title={"Elevate Your Sidewalk with Kennedy Concrete Solutions"}
        video_para={
          "Our ready mix concrete delivery service means no more waiting around and more time spent working. We deliver to your construction site the optimal balance of efficiency and quality. Our seasoned staff takes care of everything, so you don’t have to think about issues like delivery or mixing proportions.Our fleet of well-maintained, specialized vehicles driven by trained professionals guarantees on-time, error-free delivery that fits your schedule perfectly."
        }
      />
    </>
  );
};

export default Sidewalk;
