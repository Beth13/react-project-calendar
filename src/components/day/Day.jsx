import React from "react";
import PropTypes from "prop-types";

import Line from "../line/Line";
import Hour from "../hour/Hour";

import "./day.scss";

const Day = ({ dataDay, dayEvents, deleteEvent }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  const isLine =
    dataDay.getDate() === new Date().getDate() &&
    dataDay.getMonth() === new Date().getMonth();

  return (
    <div className="calendar__day" data-day={dataDay}>
      {isLine && <Line />}

      {hours.map((hour) => {
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            deleteEvent={deleteEvent}
            hourEvents={hourEvents}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.object.isRequired,
  dayEvents: PropTypes.array,
  deleteEvent: PropTypes.func,
};

export default Day;
