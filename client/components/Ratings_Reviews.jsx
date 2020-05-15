import React from 'react';
import Ratings from '../containers/RatingsContainer.js';
import ReviewsSection from '../containers/ReviewsSectionContainer.js';

const Ratings_Reviews = (props) => {
  return (
    <div>
      <Ratings />
      <ReviewsSection />
    </div>
  );
};

export default Ratings_Reviews;
