import React from "react";

function FacebookPost(props) {
  const accessToken =
    "EAAGBCSvwHfcBAEQn52zl9bUK8JGZAZAQVPK4xc3B92iJzZCKKZB0KvucxPx8cVyLf33T83ZAPZCwLkj7JyKU3nZCkEaki5TwTg5Q4JokCirctIYH64AHcr3pQ9vZA96IbNtKZC80J8TKiSCjsOTRZCnxON1Nnj4pBDXkLWQtxNy7oBe7t6UJjLNFDAgrBLm5mlXcF658BB891wcAZDZD";
  const url =
    "https://www.facebook.com/MalcolmNance/photos/a.155257705054509/490509401529336/?type=3&theater";
  const appId = "423351368556023";

  return (
    <div className="facebook-post">
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v5.0&appId=2202282320002923&autoLogAppEvents=1"
      ></script>
      <iframe
        src={`https://www.facebook.com/plugins/post.php?href=${url}&width=500&${appId}&access_token=${accessToken}`}
        width="500"
        height="624"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}
export default FacebookPost;
