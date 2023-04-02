import { useEffect, useState } from "react";
import { MOCK_HASHTAGS } from "../../mockHashtags";

const LiveViewContainer = () => {
  const [hashtags, setHashtags] = useState([]);

  const getNewValue = () => {
    return MOCK_HASHTAGS[Math.floor(Math.random() * MOCK_HASHTAGS.length)];
  };

  const getNewValues = () => {
    const newValueArray = [];
    for (let i = 0; i < 6; i++) {
      newValueArray.push(getNewValue());
    }
    return newValueArray;
  };

  const updateHashtags = () => {
    const updatedHashtags = hashtags.slice(6);
    updatedHashtags.push(...getNewValues());
    setHashtags(updatedHashtags);
  };

  useEffect(() => {
    if (!hashtags.length) {
      updateHashtags();
    }
    setTimeout(() => {
      updateHashtags();
    }, 2000);
  }, [hashtags]);

  return (
    <div className="liveViewContainer">
      {hashtags.slice(0, 6).map((hashtag, index) => {
        return <p key={index}>{hashtag}</p>;
      })}
    </div>
  );
};

export default LiveViewContainer;
