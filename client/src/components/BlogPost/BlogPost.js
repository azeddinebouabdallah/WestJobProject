import React from "react";
import './BlogPost.css'

const BlogPost = props => {
  return (
    <div className="blog-post-news">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default BlogPost;
