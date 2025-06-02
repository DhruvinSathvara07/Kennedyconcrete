import React from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";
const DecorativeConcrete = () => {
  return (
    <div>
      <Hero title={"Decorative Concrete"} />

      <VideoCard
        padding={"mt-3 pt-2 mb-5"}
        // className="d-flex justify-content-center align-items-center"
        video_link={"https://www.youtube.com/embed/atiJ73LDFXU"}
        video_text={"Decorative Concrete"}
        video_title={"Concrete Color Machine"}
        video_para={
          <>
            <p>
              This is Thomas with Kennedy Concrete. he’s out Zephyrhills,
              Florida showing off our decorative color concrete machine. Kennedy
              also provides an entire spectrum of color concrete from anything
              with specialty aggregates from your earth tones. So your more
              exotic jobs, anything you can think of Kennedy can provide For
              your next project please give us or order online.
            </p>
          </>
        }
        sub_title={"Shotcrete"}
      />
    </div>
  );
};

export default DecorativeConcrete;
