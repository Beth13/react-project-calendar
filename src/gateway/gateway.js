const baseUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/events';

export const fetchEvents = () =>
  fetch(baseUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .catch(() => alert("Internal Server Error. Can't display events"));

export const createEvent = eventData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .catch(() => alert("Internal Server Error. Can't display events"));

export const deleteEvent = eventId =>
  fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .catch(() => alert("Internal Server Error. Can't display events"));
