import React from "react";

function Feedback({ item, deleteFeedback }) {
  return (
    <>
      <h1>{item.text}</h1>
      <button onClick={() => deleteFeedback(item)}>Delete</button>
    </>
  );
}

export default Feedback;
