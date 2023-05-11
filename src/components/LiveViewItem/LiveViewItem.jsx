import classes from "./LiveViewItem.module.css";
import { sentimentToColor, sentimentToIconColor } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHeartBroken,
  faMehBlank,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

const LiveViewItem = ({ text, sentiment, date }) => {
  const sentimentIcons = {
    Positive: faHeart,
    Negative: faHeartBroken,
    Neutral: faMehBlank,
    Uknown: faQuestion,
  };

  return (
    <div
      className={classes.liveViewItem}
      style={{ backgroundColor: sentimentToColor(sentiment) }}
    >
      <div className={classes.liveViewItemInfo}>
        <div className={classes.sentimentContainer}>
          {sentiment && (
            <FontAwesomeIcon
              fontSize={25}
              color={sentimentToIconColor(sentiment)}
              icon={sentimentIcons[sentiment] || faQuestion}
            />
          )}
          <p className={classes.sentimentText}>{sentiment}</p>
        </div>
        <p className={classes.date}>{date} ,</p>
      </div>
      <div className={classes.text}>{text}</div>
    </div>
  );
};

export default LiveViewItem;
