import React, { useState } from "react";

import "./App.css";
import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
        <FeedbackList feedback={feedback} onDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
