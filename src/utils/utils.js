export const sentimentToColor = (sentiment) => {
  switch (sentiment) {
    case "Positive":
      return "#D8E8D8";
    case "Negative":
      return "#FFA8A8";
    case "Neutral":
      return "#FFD8A8 ";
    default:
      return "#E0D8FF";
  }
};

export const sentimentToIconColor = (sentiment) => {
  switch (sentiment) {
    case "Positive":
      return "#7FBF7F";
    case "Negative":
      return "#BF7F7F";
    case "Neutral":
      return "#BF9F6F";
    default:
      return "#7F7FBF";
  }
};
