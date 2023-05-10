import classes from "./LiveViewItem.module.css";
import { getColor } from "../LiveViewContainer/LiveView.color";
import negative from "../../pages/negative.png";
import positive from "../../pages/positive.png";

// type Sentiment = "Positive" | "Negative" | "Neutral" | "Unknown";

function sentimentToColor(sentiment) {
  switch (sentiment) {
    case "Positive":
      return "lightgreen";
    case "Negative":
      return "#ffd1dc";
    case "Neutral":
      return "#ffe4e1";
    default:
      return "lightgray";
  }
}

const LiveViewItem = ({ text, sentiment }) => {
  return (
    <div
      className={classes.liveViewItem}
      style={{ backgroundColor: sentimentToColor(sentiment) }}
    >
      <div className={classes.text}>{text}</div>
      <img
        className={classes.sentiment}
        src={sentiment === "Positive" ? positive : negative}
        alt="sentiment"
      />
      <p className={classes.sentimentText}>{sentiment}</p>
    </div>
  );
};

export default LiveViewItem;
