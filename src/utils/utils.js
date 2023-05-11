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
