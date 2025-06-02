import React from "react";
import Hero from "../../../Components/Hero/Hero";
import VideoCard from "../../../Components/VideoCard/VideoCard";
// import Map from "../../../Components/Map/Map";
const ConcreteDeliveryService = () => {
  return (
    <>
      <Hero title={"Concrete Delivery Areas"} />

      <VideoCard
        video_link={"https://www.youtube.com/embed/ODh5uw5B9ZQ"}
        video_text={"Kennedy Concrete"}
        video_title={"Comprehensive Concrete Services and Supplies"}
        video_para={
          "Kennedy Concrete is dedicated to providing a broad spectrum of concrete services and supplies to cater to both residential and commercial projects throughout Florida. Our commitment to quality, efficiency, and customer satisfaction ensures your project, no matter the scale, receives the attention and resources it deserves."
        }
        // ==========Button changes working
        btn_text={"Quote & Order"}
      />

      {/* <Map title={"Kennedy Concrete"} /> */}
    </>
  );
};

export default ConcreteDeliveryService;
