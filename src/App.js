import React from "react";

import "./App.css";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
        <FeedbackItem />
      </div>
    </>
  );
};

export default App;
