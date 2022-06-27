const baseUrl = "https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/events";

export const fetchEventsList = () =>
  fetch(baseUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
    .catch(() => alert("Internal Server Error. Can't display events"));

export const createEventServer = (eventData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
    .catch(() => alert("Internal Server Error. Can't display events"));

export const deleteEventServer = (eventId) =>
  fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
    .catch(() => alert("Internal Server Error. Can't display events"));
