import React, { useEffect, useState } from "react";
import Hero from "../../../Components/Hero/Hero";
import VideoCard from "../../../Components/VideoCard/VideoCard";
import axios from "axios";
// import Map from "../../../Components/Map/Map";
const ConcreteDeliveryService = () => {
  const [concreteDelivery, setConcreteDelivery] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/concrete-delivery-service"
      );

      setConcreteDelivery(response.data[0]);
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
      <Hero title={"Concrete Delivery Areas"} />

      <VideoCard
        video_link={"https://www.youtube.com/embed/ODh5uw5B9ZQ"}
        video_text={concreteDelivery.title}
        video_title={concreteDelivery.sub_title}
        video_para={concreteDelivery.para}
        btn_text={"Quote & Order"}
      />
    </>
  );
};

export default ConcreteDeliveryService;
