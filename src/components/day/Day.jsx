import React from 'react';
import PropTypes from 'prop-types';

import RedLine from '../redline/RedLine';
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ dataDay, dayEvents, setEvents, events }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  const isRedLine =
    dataDay.getDate() === new Date().getDate() && dataDay.getMonth() === new Date().getMonth();

  return (
    <div className="calendar__day" data-day={dataDay}>
      {isRedLine && <RedLine />}

      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            setEvents={setEvents}
            events={events}
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
