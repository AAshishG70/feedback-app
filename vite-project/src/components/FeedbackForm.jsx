import React, { useState } from "react";
import FeedbackRating from "./FeedbackRating";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    if (text === "") {
      setErrorMessage("Your text can't be empty!");
      setIsDisabled(true);
    } else if (text !== "" && text.trim().length < 10) {
      setErrorMessage("Text should be greater than 10 characters");
      setIsDisabled(true);
    } else {
      setErrorMessage(null);
      setIsDisabled(true);
    }
    setText(e.target.vaule);

    function grabRating(inputRating) {
      setRating(inputRating);
    }

    function handleSubmit(e) {
      e.preventDefault();
    }

    addFeedback({ text, rating });
  };

  return (
    <Card>
      <h3> Input your Feedback: </h3>
      <FeedbackRating grabRating={grabRating} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter your feedback!"
          value={text}
        />
        <button disabled={isDisabled}>Submit</button>
      </form>
      {errorMessage && <div style={{ style: "red" }}>{errorMessage}</div>}
    </Card>
  );
};

export default FeedbackForm;
