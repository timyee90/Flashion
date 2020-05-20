import React from 'react';
import StarRatingModule from 'react-star-ratings';

// we can use the react-star-ratings prebuilt component for this one

const StarRating = (props) => {
  const rating = props.rating ? props.rating : 0;
  const onChangeHandler = props.onChange ? props.onChange : null;
  return (
    <div>
      <StarRatingModule
        rating={rating}
        numberOfStars={5}
        starDimension={'16px'}
        starSpacing={'3px'}
        changeRating={onChangeHandler}
      />
    </div>
  );
};

export default StarRating;
