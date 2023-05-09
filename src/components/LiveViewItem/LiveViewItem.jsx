import classes from "./LiveViewItem.module.css";
import { getColor } from "../LiveViewContainer/LiveView.color";
import negative from "../../pages/negative.png";
import positive from "../../pages/positive.png";
const LiveViewItem = ({ text, sentiment }) => {
  return (
    <div
      className={classes.liveViewItem}
      style={{ backgroundColor: getColor() }}
    >
      <div className={classes.text}>{text}</div>
      <img
        className={classes.sentiment}
        src={sentiment === 1 ? positive : negative}
        alt="sentiment"
      />
    </div>
  );
};

export default LiveViewItem;
