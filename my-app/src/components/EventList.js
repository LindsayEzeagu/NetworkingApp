// src/components/EventList.js
import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events }) => {
  if (!events || events.length === 0) {
    return <div>No events available</div>;
  }

  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
