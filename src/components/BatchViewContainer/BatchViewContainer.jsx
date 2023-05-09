import React from "react";
import classes from "./BatchViewContainer.module.css";
import { BatchItem } from "./BatchItem";
import { MOCK_COMMENTS } from "../../mockComments";

export const BatchViewContainer = () => {
  const topHash = MOCK_COMMENTS.slice(1, 7);
  const topHashtags = [
    {
      hashtag:topHash[0],
      nbr:"1210K",
      bgColor:"rgb(135, 206, 235)"

    },
    {
      hashtag:topHash[1],
      nbr:"700K",
      bgColor:"rgb(216, 191, 216)"

    },
    {
      hashtag:topHash[2],
      nbr:"661K",
      bgColor:"rgb(245, 245, 220)"

    },
    {
      hashtag:topHash[3],
      nbr:"520K",
      bgColor:"rgb(240, 192, 208)"

    },
    {
      hashtag:topHash[4],
      nbr:"421K",
      bgColor:"rgb(250, 250, 210)"

    },
    {
      hashtag:topHash[5],
      nbr:"210K",
      bgColor:"rgb(255, 160, 122)"

    }
  ]
  return (
    <div className={classes.batchWrapper}>
      <div className={classes.batchContainer}>
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
            return <BatchItem key={id} hashtag={item.hashtag.body} nbr={item.nbr} bgColor={item.bgColor}></BatchItem>;
          })}
        </div>
      </div>
    </div>
  );
};
