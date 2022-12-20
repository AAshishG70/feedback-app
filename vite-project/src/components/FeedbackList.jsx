import Feedback from "./Feedback";
import Card from "./common/Card"

const FeedbackList = ({ feedback }, { deleteFeedback }) => {
  // Validate feedback with PropTypes
  return (
    <Card bgColor="green">
      {feedback && typeOffeedback !== "string"? (feedback.map((item) => (
        <Feedback key={item.id} item={item} deleteFeedback={deleteFeedback} />
      )))}
    </Card>
  );
};

export default FeedbackList;
