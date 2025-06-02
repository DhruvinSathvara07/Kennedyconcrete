import React from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";

const Commercial = () => {
  return (
    <>
      <Hero title={"Commercial"} />

      <VideoCard
        padding={"mt-5 mb-4"}
        video_link={"https://www.youtube.com/embed/Nln6hcJJSyg"}
        video_text={"Commercial"}
        video_title={"Ready Mix Concrete Supplier"}
        video_para={
          <>
            <p>
              Commercial concrete can be broadly defined as concrete used to
              build or enhance business facilities, such as industrial
              buildings, warehouses, retail stores and even restaurants. To
              enhance the look of commercial concrete consider using color.
              Please refer to color options.
            </p>
            <p className="mt-3">
              To add to the durability and reduce early concrete shrinkage
              cracking consider using a concrete mix that has fiber added. A
              concrete path for pedestrians at the side of the road, may also
              include paths, or walkways. To enhance the look of a concrete
              sidewalk consider using color. Please refer to color options. To
              add to the durability and reduce early concrete shrinkage cracking
              consider using a concrete mix that has fiber added.
            </p>
          </>
        }
      />
    </>
  );
};

export default Commercial;
