import React from "react";

function FacebookVideo(props) {
  let appId = '423351368556023'
  let videoUrl = 'https://www.facebook.com/thiruavai.seithi.1/videos/vb.100035273200456/172082453977527/?type=2&theater'
  //https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F
  return (
    <div className="fb-video">
      <iframe
        src={`https://www.facebook.com/plugins/video.php?href=${videoUrl}&width=500&show_text=true&height=281&${appId}`}
        width="500"
        height="281"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
      ></iframe>
    </div>
  );
}

export default FacebookVideo;
