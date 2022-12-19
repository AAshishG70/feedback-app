import React, { useState } from "react";

const FeedbackForm = () => {
  const [text, setText] = useState();
  return (
    <div>
      <h3>Input your Feedback:</h3>
      <form>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Feedback Here!!"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
