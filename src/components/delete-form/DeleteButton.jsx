import React from "react";
import PropTypes from "prop-types";

import "./delete-btn.scss";

const DeleteButton = ({ isDelete, deleteEvent, id }) => {
  return (
    isDelete && (
      <button className="delete-btn" onClick={() => deleteEvent(id)}>
        <i className="fas fa-trash"></i>
      </button>
    )
  );
};

DeleteButton.propTypes = {
  isDelete: PropTypes.bool.isRequired,
  deleteEvent: PropTypes.func,
  id: PropTypes.string.isRequired,
};

export default DeleteButton;
