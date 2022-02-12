import React, { useState } from "react";

import "./App.css";
import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
};

export default App;
