import React from "react";
import './YoutubeVideo.css'

const YoutubeVideo = props => {
  let url = props.url.split('?v=')[1];
  console.log(url)
  return (
    <div className="youtube-video">
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${url}?autoplay=0`}
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;
