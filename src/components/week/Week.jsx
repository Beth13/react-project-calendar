import React from "react";
import PropTypes from "prop-types";

import Day from "../day/Day";

import "./week.scss";

const Week = ({ weekDates, events, deleteEvent }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart}
            dayEvents={dayEvents}
            deleteEvent={deleteEvent}
            weekDates={weekDates}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array,
  deleteEvent: PropTypes.func,
};

export default Week;
