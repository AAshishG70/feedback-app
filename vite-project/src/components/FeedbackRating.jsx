import React, { useState } from "react";

function FeedbackRating({ grabRating }) {
  const [rating, setRating] = useState(0);
  console.log(rating);
  function handleRatingInput(e) {
    console.log(e);
    setRating(+e.target.value);
    grabRating(+e.target.value);
  }
  return (
    <div>
      <ul>
        <input value={1} type="radio" onChange={handleRatingInput} id="num1" />
        <label htmlFor="num1">1</label>
      </ul>
      <ul>
        <input value={2} type="radio" onChange={handleRatingInput} id="num2" />
        <label htmlFor="num2">2</label>
      </ul>
      <ul>
        <input value={3} type="radio" onChange={handleRatingInput} id="num3" />
        <label htmlFor="num3">3</label>
      </ul>
      <ul>
        <input value={4} type="radio" onChange={handleRatingInput} id="num4" />
        <label htmlFor="num4">4</label>
      </ul>
    </div>
  );
}

export default FeedbackRating;
