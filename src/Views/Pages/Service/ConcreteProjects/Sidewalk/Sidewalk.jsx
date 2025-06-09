import React, { useEffect, useState } from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";
import axios from "axios";
const Sidewalk = () => {
  const [sidewalkData, setsideWalk] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/sidewalk");
      setsideWalk(response.data[0]);
      // console.log(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Hero title={"Sidewalk"} />

      <VideoCard
        padding={"mt-5 mb-5"}
        className="d-flex justify-content-center align-items-center"
        video_link={"https://www.youtube.com/embed/5zbd0QCdKm8"}
        video_text={sidewalkData.title}
        video_title={sidewalkData.sub_title}
        video_para={sidewalkData.para}
      />
    </>
  );
};

export default Sidewalk;
