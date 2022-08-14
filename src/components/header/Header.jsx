import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal/Modal';

import './header.scss';
import { getWeekMonthString } from '../../utils/dateUtils';

const Header = ({
  changeWeekToNext,
  changeWeekToPrev,
  changeToCurrentWeek,
  events,
  setEvents,
  weekDates,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => setModalVisible(false);

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={() => setModalVisible(true)}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <Modal visible={modalVisible} closeModal={closeModal} events={events} setEvents={setEvents} />
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={changeToCurrentWeek}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={changeWeekToPrev}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={changeWeekToNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{getWeekMonthString(weekDates)}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  changeWeekToNext: PropTypes.func,
  changeWeekToPrev: PropTypes.func,
  changeToCurrentWeek: PropTypes.func,
  createEvent: PropTypes.func,
  weekDates: PropTypes.array.isRequired,
};

export default Header;
