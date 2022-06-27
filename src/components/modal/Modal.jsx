import moment from "moment";
import React, { useState } from "react";
import PropTypes from "prop-types";

import "./modal.scss";

const Modal = ({ visible, closeModal, createEvent }) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    date: moment(new Date()).format("yyyy-MM-DD"),
    startTime: moment(new Date()).format("HH:MM"),
    endTime: "",
    description: "",
  });

  const [disabledBtn, setDisabledBtn] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEvent = {
      id: Math.random(),
      title: formData.title,
      description: formData.description,
      dateFrom: new Date(`${formData.date} ${formData.startTime}`).getTime(),
      dateTo: new Date(`${formData.date} ${formData.endTime}`).getTime(),
    };

    createEvent(newEvent);
    closeModal(event);
  };

  const isFormValidCheck = (event) => {
    const isTitleDone = event.target.title !== formData.title;
    const isStartTimeDone = event.target.startTime !== formData.startTime;
    const isEndTimeDone = event.target.endTime !== formData.endTime;

    if (isTitleDone && isStartTimeDone && isEndTimeDone) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  };

  return (
    visible && (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button className="create-event__close-btn" onClick={closeModal}>
              +
            </button>
            <form
              className="event-form"
              onSubmit={handleSubmit}
              onInput={isFormValidCheck}
            >
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
                onChange={handleChange}
                value={formData.title}
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  className="event-form__field"
                  onChange={handleChange}
                  value={formData.date}
                />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  onChange={handleChange}
                  value={formData.startTime}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  onChange={handleChange}
                  value={formData.endTime}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                onChange={handleChange}
                value={formData.description}
              ></textarea>
              <button
                type="submit"
                className="event-form__submit-btn"
                disabled={disabledBtn}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  createEvent: PropTypes.func,
};

export default Modal;
