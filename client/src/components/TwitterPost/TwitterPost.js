import React from "react";

const TwitterPost = props => {
  return (
    <div className="twitter-post">
      <blockquote class="twitter-tweet" data-lang="en">
        <p lang="en" dir="ltr">
          A fix for the auto-scrolling bug is rolling out now! Thanks for your
          patience while we worked on this. Please update your iOS app to
          version 8.1.5 when it becomes available for you.
        </p>
        &mdash; Twitter Support (@TwitterSupport){" "}
        <a href="https://twitter.com/TwitterSupport/status/1191869434660605953?ref_src=twsrc%5Etfw">
          November 6, 2019
        </a>
      </blockquote>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </div>
  );
};

export default TwitterPost;
