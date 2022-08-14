import React from 'react';
import PropTypes from 'prop-types';

import './delete-btn.scss';
import { deleteEvent } from '../../gateway/gateway';

const DeleteButton = ({ isDelete, setEvents, events, id }) => {
  return (
    isDelete && (
      <button
        className="delete-btn"
        onClick={() =>
          deleteEvent(id).then(() => {
            setEvents(events.filter(event => event.id !== id));
          })
        }
      >
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
