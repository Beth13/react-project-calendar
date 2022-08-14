import React, { useState } from 'react';
import DeleteButton from '../delete-form/DeleteButton';
import PropTypes from 'prop-types';

import './event.scss';

const Event = ({ height, marginTop, title, time, setEvents, id, events }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const [isDelete, setIsDelete] = useState(false);

  const handleDeleteBtn = () => setIsDelete(!isDelete);

  return (
    <>
      <DeleteButton isDelete={isDelete} setEvents={setEvents} events={events} id={id} />
      <div style={eventStyle} data-id={id} className="event" onClick={handleDeleteBtn}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
    </>
  );
};

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string,
  deleteEvent: PropTypes.func,
  id: PropTypes.string.isRequired,
};

export default Event;
