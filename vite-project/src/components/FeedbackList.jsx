import Feedback from "./Feedback";

const FeedbackList = ({ feedback = [] }, { deleteFeedback }) => {
  // Validate feedback with PropTypes
  return (
    <div>
      {feedback.map((item) => (
        <Feedback key={item.id} item={item} deleteFeedback={deleteFeedback} />
      ))}
    </div>
  );
};

export default FeedbackList;
