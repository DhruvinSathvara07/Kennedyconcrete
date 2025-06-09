import React, { useEffect, useState } from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";
import axios from "axios";

const Driveway = () => {
  const [driveway, setDriveway] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/driveway");
      setDriveway(response.data[0]);
      console.log(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Hero title={"Driveway"} />
      <VideoCard
        padding={"mt-4 pt-3 mb-4"}
        video_link={"https://www.youtube.com/embed/XnAWH3H8HxM"}
        video_text={driveway?.title}
        video_title={driveway?.sub_title}
        video_para={
          Array.isArray(driveway?.para) ? (
            <>
              {driveway.para.map((text, idx) => (
                <p key={idx} className={idx === 1 ? "mt-2" : ""}>
                  {text}
                </p>
              ))}
            </>
          ) : null
        }
      />
    </div>
  );
};

export default Driveway;
