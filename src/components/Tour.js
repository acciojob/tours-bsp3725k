import React, { useState } from 'react';

function Tour({ tour, onDeleteTour }) {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="tour">
      <h2>{tour.name}</h2>
      <img src="https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg" alt={tour.name} />
      <p>
        {showMore ? tour.info : `${tour.info.slice(0, 200)}...`}
        <button onClick={handleToggle}>
          {showMore ? 'See less' : 'Show more'}
        </button>
      </p>
      <p>Price: ${tour.price}</p>
      <button onClick={() => onDeleteTour(tour.id)}>Delete</button>
    </div>
  );
}

export default Tour;
