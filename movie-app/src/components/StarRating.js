import { useState } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  dispay: "flex",
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
};
//maxRating has a default value
export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 24,
  defaultRating = 0,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [temp, setTemp] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }
  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onClick={() => handleRating(i + 1)}
            full={temp ? temp >= i + 1 : rating >= i + 1}
            onStarHoverIn={() => setTemp(i + 1)}
            onStarHoverOut={() => setTemp(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{temp || rating || ""}</p>
    </div>
  );
}
