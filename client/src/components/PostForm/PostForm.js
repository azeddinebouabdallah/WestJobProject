import React, { useState, useEffect } from "react";

import renderHTML from 'react-render-html';

import "./PostForm.css";

import { Card, Button, Rating } from "semantic-ui-react";

import TwitterPost from "../TwitterPost/TwitterPost";
import FacebookPost from "../FacebookPost/FacebookPost";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";
import BlogPost from "../BlogPost/BlogPost";

function PostForm() {
  // the states of the post form component
  const [believabilityRatings, setBelievabilityIndex] = useState([]);
  const [pirorKnowledgeRatings, setPirorKnowledgeIndex] = useState([]);
  const [newsIndex, setNewsIndex] = useState(0);
  const [newsComponent, setNewsComponent] = useState(<p>Loading...</p>);
  const [maxSize, setMaxSize] = useState(0);
  const [buttonText, setButtonText] = useState('Next')

  const fetchData = index => {
    console.log(newsIndex)
    fetch(`http://localhost:3000/${newsIndex}`)
      .then(res => res.json())
      .then(result => {
        if (result.news_type === "twitter") {
          setNewsComponent(<TwitterPost url={result.claim_url} />);
        } else if (result.news_type === "facebook") {
          setNewsComponent(<FacebookPost url={result.claim_url} />);
        } else if (result.news_type === "youtube") {
          setNewsComponent(<YoutubeVideo url={result.claim_url} />);
        } else if (result.news_type === 'perma'){
          setNewsComponent(<div className="perma-news">{renderHTML(result.content)}</div>)
        } else{
          setNewsComponent(
            <BlogPost
              title={result.content.newsTitle}
              content={result.content.newsContent}
            />
          );
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const fetchSize = () => {
    fetch("http://localhost:3000/size")
      .then(res => res.json())
      .then(res => {
        setMaxSize(res.size - 1);
      });
  };

  useEffect(() => {
    fetchData(newsIndex);
    fetchSize();
    setBelievabilityIndex([0]);
    setPirorKnowledgeIndex([0]);
  }, []);

  useEffect(() => {
    fetchData(newsIndex);
  },[newsIndex]) 

  const onRangeChangeBelievability = value => {
    let newArr = [...believabilityRatings];
    newArr[newsIndex] = value;
    setBelievabilityIndex(newArr);
  };

  const onRangeChangePirorKnowledge = value => {
    let newArr = [...pirorKnowledgeRatings];
    newArr[newsIndex] = value;
    setPirorKnowledgeIndex(newArr);
  };

  const onNextNewsClick = e => {
    setBelievabilityIndex([...believabilityRatings, 0]);
    setPirorKnowledgeIndex([...pirorKnowledgeRatings, 0]);
    if (newsIndex !== maxSize) {
      setNewsIndex(newsIndex + 1);
    }
    if (newsIndex === maxSize -1){
      setButtonText('Finish')
    }
    if (newsIndex === maxSize) {
      let jsonBody = JSON.stringify({
        believabilityIndexes: believabilityRatings,
        pirorKnowledgeIndexes: pirorKnowledgeRatings,
        email: 'test@test.com'
      })
      fetch('http://localhost:3000/survey', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: jsonBody
      }).then(res => console.log('SENT'))
      window.location.href = 'http://localhost:3001/greeting'
    }
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
        {buttonText}
      </Button>
    </div>
  );
}

export default PostForm;
