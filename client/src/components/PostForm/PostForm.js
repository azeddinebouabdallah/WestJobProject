import React, { useState } from "react";

import "./PostForm.css";

import { Card, Button, Rating } from "semantic-ui-react";

function PostForm() {
  const [believabilityRating, setBelievabilityRating] = useState(0);
  const [pirorKnowledgeRating, setPirorKnowledgeRating] = useState(0);

  const onRangeChangeBelievability = value => {
    setBelievabilityRating(value);
  };

  const onRangeChangePirorKnowledge = value => {
    setPirorKnowledgeRating(value);
  };
  return (
    <div className="post-form">
      <div className="control-div"></div>
      <Card>
        <div className="news-post">
          <h2>Some news or post text</h2>
          <p>
            Post text content goes here Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="rating-box">
          <div className="believability-index">
            <h3>Believability Index:</h3>
            <input
              type="range"
              id="believability-range"
              min="0"
              max="5"
              onChange={e => onRangeChangeBelievability(e.target.value)}
              name="believability-range"
              value={believabilityRating}
            />
            <Rating disabled maxRating={5} rating={believabilityRating} />
          </div>
          <div className="piror-knowledge-index">
            <h3>Piror Knowledge Index:</h3>
            <input
              type="range"
              min="0"
              max="5"
              onChange={e => onRangeChangePirorKnowledge(e.target.value)}
              name="piror-knowledge-range"
              value={pirorKnowledgeRating}
            />
            <Rating maxRating={5} rating={pirorKnowledgeRating} disabled />
          </div>
        </div>
      </Card>
      <Button primary>Next</Button>
    </div>
  );
}

export default PostForm;
