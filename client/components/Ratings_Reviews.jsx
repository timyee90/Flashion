import React from 'react';
import Ratings from '../containers/RatingsContainer.js';
import ReviewsSection from '../containers/ReviewsSectionContainer.js';

const Ratings_Reviews = (props) => {
  return (
    <div>
      <h1>Ratings and Reviews</h1>
      <div className='widgetContainer'>
        <div className='ratingsContainer'>
          <Ratings />
        </div>
        <div className='reviewsContainer'>
          <ReviewsSection />
        </div>
      </div>
    </div>
  );
};

export default Ratings_Reviews;
