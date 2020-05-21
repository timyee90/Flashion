import React from 'react';
import Ratings from '../../containers/RatingsContainer.js';
import ReviewsSection from '../../containers/ReviewsSectionContainer.js';

const Ratings_Reviews = (props) => {
  return (
    <div className='RRContainer'>
      <div className='RRSection'>
        <div className='sectionTitle'>Ratings and Reviews</div>
        <div className='flex-row'>
          <div className='ratingsContainer'>
            <Ratings />
          </div>
          <div className='reviewsContainer'>
            <ReviewsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings_Reviews;
