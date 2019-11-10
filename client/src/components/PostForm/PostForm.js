import React, { useState, useEffect } from "react";

import "./PostForm.css";

import { Card, Button, Rating } from "semantic-ui-react";

import TwitterPost from '../TwitterPost/TwitterPost'
import FacebookPost from '../FacebookPost/FacebookPost'
import YoutubeVideo from '../YoutubeVideo/YoutubeVideo'

function PostForm() {
  // the states of the post form component
  const [believabilityRatings] = useState([]);
  const [pirorKnowledgeRatings] = useState([]);
  const [newsIndex, setNewsIndex] = useState(0);
  const [newsComponent, setNewsComponent] = useState(<p>Loading...</p>);

  const fetchData = index => {
    fetch(`http://localhost:3000/${newsIndex}`)
      .then(res => res.json())
      .then(result => {
        if (result.news_type === 'twitter'){
          setNewsComponent(<TwitterPost/>)
        }else if (result.news_type === 'facebook'){
          setNewsComponent(<FacebookPost/>)
        }else if (result.news_type === 'youtube'){
          setNewsComponent(<YoutubeVideo/>)
        }else {
          setNewsComponent(<p>blog</p>)
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData(newsIndex)
  });

  const increaseNewsIndex = () => {
    setNewsIndex(newsIndex + 1);
  };

  const onRangeChangeBelievability = value => {
    believabilityRatings[newsIndex] = value;
  };

  const onRangeChangePirorKnowledge = value => {
    pirorKnowledgeRatings[newsIndex] = value;
  };

  const onNextNewsClick = e => {
    setNewsIndex(newsIndex + 1);
  };

  return (
    <div className="post-form">
      <div className="control-div"></div>
      <Card>
        <div className="news-post">{newsComponent}</div>
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
              value={believabilityRatings[newsIndex]}
            />
            <Rating
              disabled
              maxRating={5}
              rating={believabilityRatings[newsIndex]}
            />
          </div>
          <div className="piror-knowledge-index">
            <h3>Piror Knowledge Index:</h3>
            <input
              type="range"
              min="0"
              max="5"
              onChange={e => onRangeChangePirorKnowledge(e.target.value)}
              name="piror-knowledge-range"
              value={pirorKnowledgeRatings[newsIndex]}
            />
            <Rating
              maxRating={5}
              rating={pirorKnowledgeRatings[newsIndex]}
              disabled
            />
          </div>
        </div>
      </Card>
      <Button primary onClick={onNextNewsClick}>
        Next
      </Button>
    </div>
  );
}

export default PostForm;
