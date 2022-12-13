import React from "react";
import Header from "./components/common/Header";
import FeedbackList from "./components/FeedbackList";
import { feedbackData } from "./data/FeedbackData";

const App = () => {
  return (
    <div>
      <Header text="Secret" />

      <FeedbackList feedback={feedbackData} />
    </div>
  );
};

export default App;
