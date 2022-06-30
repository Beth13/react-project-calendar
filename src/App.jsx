import React, { useEffect, useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import {
  getWeekStartDate,
  generateWeekRange,
  getWeekMonthString,
} from "../src/utils/dateUtils.js";

import "./common.scss";
import moment from "moment";
import {
  fetchEventsList,
  createEventServer,
  deleteEventServer,
} from "./gateway/gateway.js";

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const changeWeekToNext = () => {
    const nextWeek = new Date(weekStartDate).setDate(
      weekStartDate.getDate() + 7
    );

    setWeekStartDate(new Date(nextWeek));
  };

  const changeWeekToPrev = () => {
    const prevWeek = new Date(weekStartDate).setDate(
      weekStartDate.getDate() - 7
    );

    setWeekStartDate(new Date(prevWeek));
  };

  const changeToCurrentWeek = () => setWeekStartDate(new Date());

  useEffect(() => {
    fetchEventsList().then((events) => {
      const newEvents = events.map(
        (event) =>
          (event = {
            ...event,
            dateFrom: new Date(event.dateFrom),
            dateTo: new Date(event.dateTo),
          })
      );
      setEvents(newEvents);
    });
  }, []);

  const createEvent = (newEvent) => {
    createEventServer(newEvent).then((newEvent) => {
      setEvents([
        ...events,
        {
          ...newEvent,
          dateFrom: new Date(newEvent.dateFrom),
          dateTo: new Date(newEvent.dateTo),
        },
      ]);
    });
  };

  const deleteEvent = (eventId) => {
    deleteEventServer(eventId).then(() => {
      setEvents(events.filter((event) => event.id !== eventId));
    });
  };

  return (
    <>
      <Header
        changeWeekToNext={changeWeekToNext}
        changeWeekToPrev={changeWeekToPrev}
        changeToCurrentWeek={changeToCurrentWeek}
        createEvent={createEvent}
        weekDates={weekDates}
      />
      <Calendar
        weekDates={weekDates}
        events={events}
        deleteEvent={deleteEvent}
      />
    </>
  );
};

export default App;
