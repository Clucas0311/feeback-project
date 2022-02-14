import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Card>
      <form action="">
        <h2>How world you rate your service with us?</h2>
        {/* @todo -rating select component */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
