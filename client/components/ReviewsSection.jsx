import React from 'react';
import Review from './Review.jsx';

const Reviews = (props) => {
  const reviews = props.results.map((review) => {
    return <Review key={review.id} review={review} />;
  });
  return (
    <div>
      <div>{reviews}</div>
    </div>
  );
};

export default Reviews;
