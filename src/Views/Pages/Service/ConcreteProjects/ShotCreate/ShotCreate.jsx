import React from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";
const ShotCreate = () => {
  return (
    <div>
      <Hero title={"Shot Create"} />

      <VideoCard
        padding={"mt-5 mb-5"}
        // className="d-flex justify-content-center align-items-center"
        video_link={"https://www.youtube.com/embed/klfxR3wIG8g"}
        video_text={"Shotcrete"}
        video_title={"Get the Job Done Quicker with Shotcrete"}
      />
    </div>
  );
};

export default ShotCreate;
