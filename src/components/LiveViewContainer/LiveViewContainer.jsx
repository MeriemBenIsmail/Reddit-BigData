import classes from "./LiveViewContainer.module.css";
import { useEffect, useState } from "react";
import { MOCK_COMMENTS } from "../../mockComments";
import LiveViewItem from "../LiveViewItem/LiveViewItem";

const LiveViewContainer = () => {
  const [comments, setComments] = useState([]);

  const getNewValue = () => {
    return MOCK_COMMENTS[Math.floor(Math.random() * MOCK_COMMENTS.length)];
  };

  const getNewValues = () => {
    const newValueArray = [];
    for (let i = 0; i < 6; i++) {
      newValueArray.push(getNewValue());
    }
    return newValueArray;
  };

  const updateComments = () => {
    const updatedComments = comments.slice(6);
    updatedComments.push(...getNewValues());
    setComments(updatedComments);
  };

  useEffect(() => {
    if (!comments.length) {
      updateComments();
    }
    setTimeout(() => {
      updateComments();
    }, 2000);
  }, [comments]);

  return (
    <div className={classes.liveViewContainer}>
      {comments.slice(0, 6).map((comment, index) => {
        return <LiveViewItem text={comment.body} sentiment={comment.sentiment} key={index} />;
      })}
    </div>
  );
};

export default LiveViewContainer;
