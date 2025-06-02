import React from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";

const Driveway = () => {
  return (
    <div>
      <Hero title={"Driveway"} />

      <VideoCard
        padding={"mt-4 pt-3 mb-4"}
        video_link={"https://www.youtube.com/embed/XnAWH3H8HxM"}
        video_text={"Calculator"}
        video_title={"Concrete Driveway Calculator"}
        video_para={
          <>
            <p>
              Use our concrete driveway calculator to determine the cost of
              concrete for projects such as paths to private garages, carports
              or houses. A ready mix concrete driveway can be cast into
              different shapes and colors and provides unmatched durability in
              terms of compressive strength and resistance to weather extremes.
            </p>
            <p className="mt-2">
              Many people like to make their driveways decorative, one such way
              is adding color. Please refer to color options. To add to the
              durability and reduce early concrete driveway shrinkage cracking
              consider using a concrete mix that has fiber added.
            </p>
          </>
        }
      />
    </div>
  );
};

export default Driveway;
