import React from 'react';
import StarRatingModule from '../../node_modules/react-star-ratings';

// we can use the react-star-ratings prebuilt component for this one

const StarRating = (props) => {
  console.log('star rating: ', props.rating);
  const rating = props.rating ? props.rating : 0;
  return (
    <div>
      <StarRatingModule
        rating={rating}
        numberOfStars={5}
        starDimension={'16px'}
        starSpacing={'3px'}
      />
    </div>
  );
};

export default StarRating;
