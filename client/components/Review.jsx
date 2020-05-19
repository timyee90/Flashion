import React, { useEffect } from 'react';
import moment from 'moment';
import StarRating from './StarRating.jsx';
import Helpful from './Helpful.jsx';

const Review = ({ review }) => {
  // the following below will need to be revised for styling
  const recommended =
    review.recommend > 0 ? <p>&#10004; I recommend this product</p> : '';
  const response = review.response ? <div>{review.response}</div> : '';
  return (
    <div className='review'>
      <StarRating rating={review.rating} />
      <h3>{review.summary}</h3>
      <p>
        {review.reviewer_name} {moment(review.date).format('MMMM DD, YYYY')}
      </p>
      <p>{review.body}</p>
      <div>{recommended}</div>
      <div className='response'>
        <p>Response:</p>
        <div>{response}</div>
      </div>
      <div>
        <Helpful
          count={review.helpfulness}
          type={'reviews'}
          id={review.review_id}
        />
      </div>
    </div>
  );
};

export default Review;
