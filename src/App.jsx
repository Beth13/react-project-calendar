import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';
import { fetchEvents } from './gateway/gateway.js';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const changeWeekToNext = () => {
    const nextWeek = new Date(weekStartDate).setDate(weekStartDate.getDate() + 7);

    setWeekStartDate(new Date(nextWeek));
  };

  const changeWeekToPrev = () => {
    const prevWeek = new Date(weekStartDate).setDate(weekStartDate.getDate() - 7);

    setWeekStartDate(new Date(prevWeek));
  };

  const changeToCurrentWeek = () => setWeekStartDate(new Date());

  useEffect(() => {
    fetchEvents().then(events => {
      const newEvents = events.map(
        event =>
          (event = {
            ...event,
            dateFrom: new Date(event.dateFrom),
            dateTo: new Date(event.dateTo),
          }),
      );
      setEvents(newEvents);
    });
  }, []);

  return (
    <>
      <Header
        changeWeekToNext={changeWeekToNext}
        changeWeekToPrev={changeWeekToPrev}
        changeToCurrentWeek={changeToCurrentWeek}
        events={events}
        setEvents={setEvents}
        weekDates={weekDates}
      />
      <Calendar weekDates={weekDates} events={events} setEvents={setEvents} />
    </>
  );
};

export default App;
