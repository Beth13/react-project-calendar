import React from "react";
import PropTypes from "prop-types";

import "./navigation.scss";

import { days } from "../../utils/dateUtils.js";

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => (
        <div
          key={Math.random()}
          className={
            dayDate.getDate() === new Date().getDate() &&
            dayDate.getMonth() === new Date().getMonth()
              ? "calendar__day-label day-label calendar__day_today"
              : "calendar__day-label day-label"
          }
        >
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span className="day-label__day-number">{dayDate.getDate()}</span>
        </div>
      ))}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;
