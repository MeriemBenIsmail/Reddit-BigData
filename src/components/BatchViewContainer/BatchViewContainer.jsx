import React, { useEffect } from "react";
import classes from "./BatchViewContainer.module.css";
import DoughnutChart from "./DoughnutChart/DoughnutChart";
import { sentimentToColor } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import socket from "../../utils/ws";
import { useWS } from "../../App";

export const BatchViewContainer = () => {
  const navigate = useNavigate();

  const goToLiveView = () => {
    navigate("/live-view");
  };

  const { batchResult } = useWS();

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
        {batchResult && (
          <DoughnutChart
            labels={Object.keys(batchResult)}
            data={Object.values(batchResult)}
            colors={Object.keys(batchResult).map((s) => sentimentToColor(s))}
          />
        )}
      </div>
    </div>
  );
};
