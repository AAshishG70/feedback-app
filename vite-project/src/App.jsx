import { useState } from "react";
import Card from "./components/common/Card";
import Header from "./components/common/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import { feedbackData } from "./data/FeedbackData";
import { v4 as uuidv4 } from "uuid";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  function deleteFeedback(clickedId) {
    // console.log(`You clicked on ${item.text} with id ${item.id}`);
    if (window.confirm("Do you really want to delete this feedback?")) {
      setFeedback(feedback.filter((actualItem) => actualItem.id !== clickedId));
    }
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
      <FeedbackStats feedback={feedback} />
    </div>
  );
}

export default App;
