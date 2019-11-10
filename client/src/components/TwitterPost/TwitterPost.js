import React from "react";

import './TwitterPost.css'

const TwitterPost = props => {
  let url = props.url
  return (
    <div className="twitter-post">
      <iframe
        border="0"
        frameborder="0"
        height="500"
        width="600"
        src={`https://twitframe.com/show?url=${url}`}
      ></iframe>
    </div>
  );
};

export default TwitterPost;
