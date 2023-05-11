import classes from "./LiveViewContainer.module.css";
import LiveViewItem from "../LiveViewItem/LiveViewItem";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useWS } from "../../App";

const LiveViewContainer = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/statistics");
  };

  const { comments } = useWS();

  const getDate = (timestamp) => {
    const date = new Date(+timestamp * 1000);
    return (
      date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString()
    );
  };

  return (
    <div className={classes.liveViewContainer}>
      <button className={classes.homeButton} onClick={goHome}>
        <FontAwesomeIcon icon={faHome} fontSize={20} />
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
