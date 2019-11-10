import React from "react";

const YoutubeVideo = props => {
  return (
    <div className="youtube-vide">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_uQrJ0TkZlc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideo