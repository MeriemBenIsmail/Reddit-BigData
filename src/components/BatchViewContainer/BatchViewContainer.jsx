import React from "react";
import classes from "./BatchViewContainer.module.css";
import DoughnutChart from "./DoughnutChart/DoughnutChart";
import { sentimentToColor } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

export const BatchViewContainer = () => {
  const navigate = useNavigate();

  const goToLiveView = () => {
    navigate("/live-view");
  };

  const mockdata = {
    Positive: 5,
    Negative: 2,
    Neutral: 7,
    Uknown: 8,
  };

  return (
    <div className={classes.batchWrapper}>
      <div className={classes.info}>
        <h1>
          Sentiment Analysis Insights: Unveiling the Emotions within Comments
        </h1>
        <p>
          Welcome to our Sentiment Analysis Insights page. Harnessing the power
          of sentiment analysis, we categorize reddit commnets into positive,
          negative, and neutral categories. By exploring the sentiment
          distribution, you can gain a nuanced understanding of user sentiments,
          enabling you to make informed decisions and foster a positive user
          experience.
        </p>
        <div>
          <button onClick={goToLiveView}>See live comments</button>
        </div>
      </div>
      <div className={classes.doughnut}>
        <DoughnutChart
          labels={Object.keys(mockdata)}
          data={Object.values(mockdata)}
          colors={Object.keys(mockdata).map((s) => sentimentToColor(s))}
        />
      </div>
      {/* {<div className={classes.batchContainer}>
        <div className={classes.tweetsNbr}>
          <p className={classes.title}>Yesterday's Tweets</p>
          <p className={classes.nbr}>425K</p>
        </div>
        <div className={classes.tweetsPerMin}>
          <div className={classes.item}>
            <p className={classes.title}>Tweets this week</p>
            <p className={classes.nbr}>120K</p>
          </div>
          <div className={classes.item}>
            <p className={classes.title}>Tweets this month</p>
            <p className={classes.nbr}>652K</p>
          </div>
        </div>
      </div>
      <div className={classes.topHashtags}>
        <h2 className={classes.header}>Top Comments On Reddit</h2>

        <div className={classes.hashtagBoxes}>
          {topHashtags.map((item, id) => {
            return (
              <BatchItem
                key={id}
                comment={item.hashtag.body}
                sentiment={item.hashtag.sentiment}
                bgColor={item.bgColor}
              ></BatchItem>
            );
          })}
        </div>
      </div>} */}
    </div>
  );
};
