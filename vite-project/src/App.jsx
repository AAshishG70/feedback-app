import { useState } from "react";
import Card from "./components/common/Card";
import Header from "./components/common/Header";
import FeedbackList from "./components/FeedbackList";
import { feedbackData } from "./data/FeedbackData";

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);
  return (
    <div>
      <Card bgColor="purple">
        <div>Hello</div>
      </Card>
      <Header text="Secret" />
      <FeedbackList feedback={feedback} />
    </div>
  );
};

export default App;
