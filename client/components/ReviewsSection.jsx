import React, { useEffect } from 'react';
import Review from './Review.jsx';

const ReviewsSection = (props) => {
  useEffect(() => {
    props.getReviewData(26);
  }, []);

  const reviews = props.reviews.map((review, index) => {
    return <Review key={index} review={review} />;
  });
  return (
    <div>
      <div>{reviews}</div>
    </div>
  );
};

export default ReviewsSection;
