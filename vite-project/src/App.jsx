import { useState } from "react";
// import Card from "./components/common/Card";
import FeedbackForm from "./components/FeedbackForm";
import Header from "./components/common/Header";
import FeedbackList from "./components/FeedbackList";
import { feedbackData } from "./data/FeedbackData";

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteFeedback = (item) => {
    if (window.confirm("Are you sure you wan to delete this feedback?")) {
      setFeedback(
        feedback.filter((actualItem) => actualItem.id !== clickedItem.id)
      );
    }
  };

  return (
    <div>
      {/* <Card bgColor="purple">
        <div>Hello</div>
      </Card> */}
      <FeedbackForm />
      <Header text="Secret" />
      <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
    </div>
  );
};

export default App;
