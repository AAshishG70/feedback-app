import { useState } from "react";
// import Card from "./components/common/Card";
import FeedbackForm from "./components/FeedbackForm";
// import FeedbackRating from "./components/FeedbackRating";
// import Header from "./components/common/Header";
import FeedbackList from "./components/FeedbackList";
import { feedbackData } from "./data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteFeedback = (item) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(
        feedback.filter((actualItem) => actualItem.id !== clickedItem.id)
      );
    }

    function addFeedback(newFeedback) {
      newFeedback.id = uuidv4();
      setFeedback([...feedback, newFeedback]);
    }

    return (
      <div className="container">
        <Header text="Feedback App" />
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      </div>
    );
  };
};

export default App;
