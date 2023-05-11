import classes from "./LiveViewContainer.module.css";
import { useEffect, useState } from "react";
import LiveViewItem from "../LiveViewItem/LiveViewItem";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

// connect to websocket server
const socket = new WebSocket("ws://localhost:4000");

const LiveViewContainer = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/statistics");
  };

  const [comments, setComments] = useState([
    {
      _id: 1,
      body: "Test comment",
      sentiment: "Neutral",
      timestamp: 1639172876,
    },
    {
      _id: 1,
      body: "Test comment",
      sentiment: "Neutral",
      timestamp: 1639172876,
    },
    {
      _id: 1,
      body: "Test comment",
      sentiment: "Positive",
      timestamp: 1639172876,
    },
    {
      _id: 1,
      body: "Test comment",
      sentiment: "Negative",
      timestamp: 1639172876,
    },
    {
      _id: 1,
      body: "Test comment",
      sentiment: "Positive",
      timestamp: 1639172876,
    },
    {
      _id: 1,
      body: "Test comment",
      sentiment: "Unknown",

      timestamp: 1639172876,
    },
    {
      _id: 1,
      body: "Test comment",
      sentiment: "Positive",
      timestamp: 1639172876,
    },
  ]);

  useEffect(() => {
    socket.onopen = () => {
      console.log("connected to websocket server");
    };
    socket.onmessage = (message) => {
      console.log(
        "🚀 ~ file: LiveViewContainer.jsx:29 ~ useEffect ~ message:",
        message
      );
      try {
        const comments = JSON.parse(message.data);
        setComments(comments);
      } catch (e) {
        console.log("🚀 ~ file: LiveViewContainer.jsx:29 ~ useEffect ~ e:", e);
      }
    };
  }, []);

  const getDate = (timestamp) => {
    const date = new Date(timestamp);
    return (
      date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString()
    );
  };

  return (
    <div className={classes.liveViewContainer}>
      <button className={classes.homeButton} onClick={goHome}>
        <FontAwesomeIcon icon={faHome} fontSize={22} />
      </button>
      {comments.slice(0, 6).map((comment) => {
        return (
          <LiveViewItem
            text={comment.body}
            sentiment={comment.sentiment}
            key={comment.comment_id}
            date={getDate(comment.timestamp)}
          />
        );
      })}
    </div>
  );
};

export default LiveViewContainer;
