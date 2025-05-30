import React from "react";
import Hero from "../../Components/Hero/Hero";
import VideoCard from "../../Components/VideoCard/VideoCard";

const InstantQuote = () => {
  return (
    <>
      <Hero title={"Instant Quote and Order"} />

      <VideoCard
        video_link={"https://www.youtube.com/embed/e10NtXagn0I"}
        video_text={"Ready for your project?"}
        video_title={"Instant Quote and Order Concrete"}
        video_para={
          "Get an instant quote and place your order online with Kennedy Concrete. Our easy-to-use system ensures a hassle-free experience, providing quick, reliable, and tailored concrete delivery solutions for your Florida project."
        }
        btn_text={"Contact Us"}
      />
    </>
  );
};

export default InstantQuote;
