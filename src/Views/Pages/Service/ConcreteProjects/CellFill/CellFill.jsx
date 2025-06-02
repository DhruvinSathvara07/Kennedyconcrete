import React from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";

const CellFill = () => {
  return (
    <div>
      <Hero title={"Cell Fill"} />

      <VideoCard
        padding={"mt-0 mb-4"}
        video_link={"https://www.youtube.com/embed/XnAWH3H8HxM"}
        video_text={"CELL FILL"}
        video_title={"Lightweight Concrete"}
        video_para={
          "There are many types of lightweight concretes. Structural lightweight concrete: a mixture of portland cement, water, fine (sand) aggregates, and expanded clay, shale, or slate coarse aggregates. While normal-weight concrete mixes typically weigh 145 to 155 pcf, lightweight concrete typically weighs 110 to 115 pcf. Structural lightweight concrete commonly has 28-day compression strengths comparable to normal-weight concretes."
        }
      />
    </div>
  );
};

export default CellFill;
