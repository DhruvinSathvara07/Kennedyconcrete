import React, { useEffect, useState } from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";
import axios from "axios";

const Commercial = () => {
  const [commercial, setCommercial] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/commercial");
      setCommercial(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Hero title={"Commercial"} />

      <VideoCard
        padding={"mt-5 mb-4"}
        video_link={"https://www.youtube.com/embed/Nln6hcJJSyg"}
        video_text={commercial.title}
        video_title={commercial.sub_title}
        video_para={
          Array.isArray(commercial?.para) ? (
            <>
              {commercial.para.map((text, idx) => (
                <p key={idx} className={idx === 1 ? "mt-3" : ""}>
                  {text}
                </p>
              ))}
            </>
          ) : null
        }
      />
    </>
  );
};

export default Commercial;
