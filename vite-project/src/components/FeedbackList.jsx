import React from "react";
import Card from "./common/Card";
import Feedback from "./Feedback";

function FeedbackList({ feedback, deleteFeedback }) {
  // 0, '', undefined, null, false, NaN
  console.log(feedback);
  console.log(feedback.length);

  // Validate feedback with PropTypes
  return (
    <div bgColor="green">
      {feedback && typeof feedback !== "string" && feedback.length ? (
        feedback.map((item) => (
          <Feedback key={item.id} item={item} deleteFeedback={deleteFeedback} />
        ))
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
}

export default FeedbackList;
