import React, { useState } from "react";

const LazyYouTube = ({ videoId, title }) => {
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    const handleLoadVideo = () => {
        setIsIframeLoaded(true);
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center video-section mb-4">
            {!isIframeLoaded ? (
                <div className="video-thumbnail" onClick={handleLoadVideo}>
                    <img src={thumbnailUrl} alt={title} />
                    <div className="play-button"></div>
                </div>
            ) : (
                <iframe
                    width="550"
                    height="309"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            )}
            <h2 className="text-light text-center mt-3">{title}</h2>
        </div>
    );
};

export default LazyYouTube;
