import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

const Calendar = ({ weekDates, events, setEvents }) => {
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={events} setEvents={setEvents} />
        </div>
      </div>
    </section>
  );
};

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array,
  deleteEvent: PropTypes.func,
};

export default Calendar;
