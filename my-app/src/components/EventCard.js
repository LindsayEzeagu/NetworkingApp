// src/components/EventCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.imageUrl} alt={event.name} className="event-image" />
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <Link to={`/event/${event.id}`}>View Details</Link>
    </div>
  );
};

export default EventCard;
