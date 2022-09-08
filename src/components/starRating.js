import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./star.css";
const StarRating = (props) => {
  const [rating, setRating] = useState(props.rating);

  return (
    <div className="star">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
              size={20}
            />
          </label>
        );
      })}
      rating: {rating}
    </div>
  );
};
export default StarRating;
