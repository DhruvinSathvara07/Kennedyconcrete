import React from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";
const Slab = () => {
  return (
    <>
      <Hero title={"Slab"} />

      <VideoCard
        className="d-flex justify-content-center align-items-center"
        padding={"mt-5 mb-4"}
        video_link={"https://www.youtube.com/embed/sBbYbJec758"}
        video_text={"Slab"}
        video_title={"Looking for high-quality concrete slabs in Florida?"}
        video_para={
          "Discover the knowledge, reputation and experience of Kennedy Concrete, a trusted ready mix concrete supplier delivering durable and reliable concrete solutions every day. Explore our wide range of concrete mixes designed for various construction slab projects.Contact us today for friendly professional service."
        }
      />
    </>
  );
};

export default Slab;
