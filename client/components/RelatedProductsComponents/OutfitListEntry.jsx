import React from 'react';
import { computeAverageRating } from '../../../utils/computeRatingAverage.js';
import StarRatingModule from 'react-star-ratings';

const OutfitListEntry = ({
  id,
  product,
  style,
  rating,
  setProductId,
  remove,
}) => {
  const url = style.results[0].photos[0].thumbnail_url;
  const averageRating = Number(computeAverageRating(rating.results));

  const star =
    averageRating > 0 ? (
      <StarRatingModule
        rating={averageRating}
        starRatedColor='gold'
        numberOfStars={5}
        starDimension={'16px'}
        starSpacing={'1px'}
      />
    ) : (
      ''
    );

  return (
    <div>
      <button
        onClick={() => {
          remove(id);
        }}
        type='button'
        className='btn btn-default btn-sm btn-overlap'
      >
        <span className='glyphicon glyphicon-remove remove-btn'></span>
      </button>
      <div onClick={() => setProductId(id)}>
        <img className='rel-prod-img' src={url}></img>
        <div>{product.category}</div>
        <div>{product.name}</div>
        <div>${product.default_price}</div>
        <div>{star}</div>
      </div>
    </div>
  );
};

export default OutfitListEntry;
