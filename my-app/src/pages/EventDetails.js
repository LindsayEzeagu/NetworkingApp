// src/pages/EventDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const eventsData = [
  { id: 1, name: 'Concert', description: 'Enjoy a night of live music.' },
  { id: 2, name: 'Art Exhibition', description: 'Explore modern art.' },
  { id: 3, name: 'Tech Conference', description: 'Learn about new tech.' },
  // Add more events as needed
];

const EventDetails = () => {
  const { id } = useParams();
  const event = eventsData.find(event => event.id === parseInt(id));

  const handleAskOthers = () => {
    alert('Your request has been sent to your friends!');
  };

  return (
    <div className="container">
      {event ? (
        <div className="event-details">
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <button onClick={handleAskOthers}>Ask Others to Attend</button>
        </div>
      ) : (
        <p>Event not found</p>
      )}
    </div>
  );
};

export default EventDetails;
