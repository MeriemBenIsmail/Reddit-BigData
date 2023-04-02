import classes from "./LiveViewItem.module.css";
import { getColor } from "../LiveViewContainer/LiveView.color";

const LiveViewItem = ({ text }) => {
  return (
    <div
      className={classes.liveViewItem}
      style={{ backgroundColor: getColor() }}
    >
      {text}
    </div>
  );
};

export default LiveViewItem;
