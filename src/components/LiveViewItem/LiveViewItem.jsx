import classes from "./LiveViewItem.module.css";
import negative from "../../pages/negative.png";
import positive from "../../pages/positive.png";
import { sentimentToColor } from "../../utils/utils";

const LiveViewItem = ({ text, sentiment, date }) => {
  return (
    <div
      className={classes.liveViewItem}
      style={{ backgroundColor: sentimentToColor(sentiment) }}
    >
      <p className={classes.sentimentText}>{date}</p>
      <div className={classes.liveViewItemInfo}>
        <div className={classes.text}>{text}</div>
        <img
          className={classes.sentiment}
          src={sentiment === "Positive" ? positive : negative}
          alt="sentiment"
        />
        <p className={classes.sentimentText}>{sentiment}</p>
      </div>
    </div>
  );
};

export default LiveViewItem;
