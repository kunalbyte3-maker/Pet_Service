import React, { useState } from "react";
import "./Petevents.css";

const events = [
  {
    name: "Pet Costume Parade",
    img: "https://stlmardigras.org/images/uploads/manipulations/_ansel_image_cache/5ffbf9ed659cae3c7b938b757b0f7184.jpg",
    type: "Parade",
    location: "Banglore",
    time: "10:00 AM - 12:00 PM",
  },
  {
    name: "Dog Agility Challenge",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4o2bUNIbxFGFhkWYDxo353qoc9-e7Uc8UkQ&s",
    type: "Competition",
    location: "chandigarh",
    time: "1:00 PM - 3:00 PM",
  },
  {
    name: "Cat Talent Show",
    img: "https://moderncat.com/wp-content/uploads/2018/05/the-savitsky-cats-1440x980.jpg",
    type: "Show",
    location: "Delhi",
    time: "11:00 AM - 2:00 PM",
  },
  {
    name: "Adoption Fair",
    img: "https://www.shutterstock.com/image-photo/huntington-beach-california-usa-april-600nw-2147917481.jpg",
    type: "Adoption",
    location: "Mumbai",
    time: "9:00 AM - 1:00 PM",
  },
  {
    name: "Pet & Owner Look-Alike Contest",
    img: "https://xvctqx.infiniteuploads.cloud/2019/08/dogsownerslook-likedogs.jpg",
    type: "Contest",
    location: "Noida",
    time: "2:00 PM - 4:00 PM",
  },
  {
    name: "Pet Wellness Workshop",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmxeXBUYBBDwCUW4kO-3PdibdBnYoIOI7-w&s",
    type: "Workshop",
    location: "Gurgaon",
    time: "3:00 PM - 5:00 PM",
  },
];

export default function PetEventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [eventType, setEventType] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const filteredEvents = events.filter((event) => {
    return (
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (eventType === "" || event.type === eventType)
    );
  });

  const uniqueTypes = [...new Set(events.map((e) => e.type))];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${name} at ${selectedEvent.name}!`);
    setName("");
    setEmail("");
    setSelectedEvent(null);
  };

  return (
    <div className="pet-events-page">
      <header className="header">
        <h1>🐾 Pet Events</h1>
        <p>Join us for fun-filled events for you and your furry friends!</p>
      </header>

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        >
          <option value="">All Types</option>
          {uniqueTypes.map((type, idx) => (
            <option key={idx} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="events-grid">
        {filteredEvents.length === 0 ? (
          <p className="no-events">No events found.</p>
        ) : (
          filteredEvents.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.img} alt={event.name} />
              <div className="event-info">
                <h3>{event.name}</h3>
                <p className="type">{event.type}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <button onClick={() => setSelectedEvent(event)}>Book Now</button>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedEvent && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Book: {selectedEvent.name}</h2>
            <form onSubmit={handleBookingSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="modal-actions">
                <button type="button" onClick={() => setSelectedEvent(null)}>Cancel</button>
                <button type="submit">Confirm Booking</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
