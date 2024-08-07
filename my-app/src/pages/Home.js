// src/pages/Home.js
import React, { useState } from 'react';
import EventList from '../components/EventList';
import concertImg from '../assets/img/concert.jpg';
import artImg from '../assets/img/art.png';
import techImg from '../assets/img/tech.jpg';
import foodImg from '../assets/img/food.jpg';
import marathonImg from '../assets/img/marathon.jpg';
import booksImg from '../assets/img/book.jpg';

const eventsData = [
  { id: 1, name: 'Concert', description: 'Enjoy a night of live music.', imageUrl: concertImg },
  { id: 2, name: 'Art Exhibition', description: 'Explore modern art.', imageUrl: artImg },
  { id: 3, name: 'Tech Conference', description: 'Learn about new tech.', imageUrl: techImg },
  { id: 4, name: 'Food Festival', description: 'Taste dishes from around the world.', imageUrl: foodImg },
  { id: 5, name: 'Marathon', description: 'Join the city marathon.', imageUrl: marathonImg },
  { id: 6, name: 'Book Fair', description: 'Discover new books and authors.', imageUrl: booksImg },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          className="search-input"
          placeholder="Search events..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <h2>Upcoming Events</h2>
      <EventList events={filteredEvents} />
    </div>
  );
};

export default Home;
