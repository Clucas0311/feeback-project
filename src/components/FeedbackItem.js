import React, { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

import Card from "../UI/Card";

const FeedbackItem = ({ item }) => {
  const { onDelete, onEdit } = useContext(FeedbackContext);

  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleClick = () => {
    onEdit(item);
  };

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={handleDelete} className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={handleClick}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
