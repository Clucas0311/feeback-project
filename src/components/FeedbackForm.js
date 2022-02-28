import React, { useState, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "../UI/Card";
import Button from "../UI/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = () => {
  const { onAdd } = useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

  const handleTextChange = (event) => {
    // If we have no text disable the button
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
      // if there is something in the text and it has less than text characters w/o whitespace
      // Alert user of requirment
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      // Otherwise activate the button
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      onAdd(newFeedback);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} action="">
        <h2>How world you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
