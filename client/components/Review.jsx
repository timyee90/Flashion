import React from 'react';
import moment from 'moment';
import StarRating from './StarRating.jsx';

const Review = ({ review }) => {
  //the following below will need to be revised for styling
  const recommended =
    review.recommend > 0 ? <p>&#10004; I recommend this product</p> : '';
  const response =
    response & (response.length > 0) ? <div>{review.response}</div> : '';
  return (
    <div id={review.review_id}>
      <StarRating rating={'placeholder' /* review.rating or something */} />
      <h3>{review.summary}</h3>
      <p>
        {review.reviewer_name} {moment(review.date).format('MMMM DD, YYYY')}
      </p>
      <p>{review.body}</p>
      <div>{recommended}</div>
      <div>{response}</div>
      <div>
        <p>
          Helpful?{' '}
          <a href={'placeholder' /*click handler for helpful count*/}> Yes </a>
          {review.helpfulness} |{' '}
          <a href={'placeholder' /*click handler for report */}>Report</a>
        </p>
      </div>
    </div>
  );
};

export default Review;
