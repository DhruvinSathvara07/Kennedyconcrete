import React from "react";
import Button from "../Buttons/Button";
const VideoCard = ({
  video_text,
  video_title,
  video_para,
  video_link,
  btn_text,
}) => {
  return (
    <div>
      <section>
        <div className="video-container">
          <div className="container-fluid d-flex justify-content-center align-items-center w-100">
            <div className="container">
              <div className="row w-100">
                <div className="col-lg-6 col-md-6 iframe">
                  <iframe
                    width="585"
                    height="329"
                    src={video_link}
                    title="Concrete Delivery Project Pour"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="video-text">
                    <p className="text mt-5 mt-lg-0 ms-5 ms-lg-0 ms-md-5">
                      {video_text}
                    </p>
                    <div className="title-h1 mt-5 mt-md-0 mt-lg-0 ms-5 ms-lg-0 ms-md-5">
                      <h1>{video_title}</h1>
                    </div>
                    <div id="para" className="ms-5 mt-md-0 ms-lg-0 ms-md-5">
                      <p>{video_para}</p>
                    </div>
                    <div className="mt-5 ms-5 ms-lg-0 ms-md-5">
                      <Button
                        bgColor="#DE0B18"
                        textColor="#fff"
                        icon={true}
                        text={btn_text}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoCard;
