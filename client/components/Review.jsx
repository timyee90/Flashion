import React from 'react';
import moment from 'moment';
import StarRating from './StarRating.jsx';

const Review = (props) => {
  //the following below will need to be revised for styling
  const recommended =
    props.recommend > 0 ? <p>&#10004; I recommend this product</p> : '';
  return (
    <div>
      <StarRating rating={/* props.rating or something */} />
      <h3>{props.summary}</h3>
      <p>
        {props.reviewer_name} {moment(props.date).format('MMMM DD, YYYY')}
      </p>
      <p>{props.body}</p>
      {recommended}
    </div>
  );
};

export default Review;
