import classes from "./LiveViewContainer.module.css";
import { useEffect, useState } from "react";
import { MOCK_COMMENTS } from "../../mockComments";
import LiveViewItem from "../LiveViewItem/LiveViewItem";

// type Sentiment = "Positive" | "Negative" | "Neutral" | "Unknown";
// type Comment = {
//   comment_id: string;
//   parent_id: string;
//   body: string;
//   subreddit: string;
//   timestamp: string;
//   sentiment: Sentiment;
// }


// connect to websocket server
const socket = new WebSocket("ws://localhost:4000");

const LiveViewContainer = () => {
  
  const [comments, setComments] = useState([]);

  useEffect(() => {
    socket.onopen = () => {
      console.log("connected to websocket server");
    };
    socket.onmessage = (message) => {
      console.log("🚀 ~ file: LiveViewContainer.jsx:29 ~ useEffect ~ message:", message)
      try {
        const comments = JSON.parse(message.data);
        setComments(comments);
      }
      catch (e) {
        console.log("🚀 ~ file: LiveViewContainer.jsx:29 ~ useEffect ~ e:", e)
      }
    }}, []);
  

  return (
    <div className={classes.liveViewContainer}>
      {comments.slice(0, 6).map((comment, index) => {
        return <LiveViewItem text={comment.body} sentiment={comment.sentiment} key={comment.comment_id} />;
      })}
    </div>
  );
};

export default LiveViewContainer;
