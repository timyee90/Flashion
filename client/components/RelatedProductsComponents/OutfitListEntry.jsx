import React, { useState, useEffect } from 'react';
import { computeAverageRating } from '../../../utils/computeRatingAverage.js';
import StarRatingModule from 'react-star-ratings';

const OutfitListEntry = ({
  id,
  product,
  style,
  rating,
  setProductId,
  currentId,
  remove,
}) => {
  let url =
    style.results.length > 0 ? style.results[0].photos[0].thumbnail_url : '';
  let averageRating = Number(computeAverageRating(rating.results));

  if (!url) {
    return null;
  }

  let star =
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
      <img
        className='rel-prod-img'
        src={url}
        onClick={() => setProductId(id)}
      ></img>
      <button
        onClick={() => {
          remove(currentId);
        }}
        type='button'
        className='btn btn-default btn-sm btn-overlap'
      >
        <span className='glyphicon glyphicon-remove'></span>
      </button>
      <div onClick={() => setProductId(id)}>{product.category}</div>
      <div onClick={() => setProductId(id)}>{product.name}</div>
      <div onClick={() => setProductId(id)}>${product.default_price}</div>
      <div onClick={() => setProductId(id)}>{star}</div>
    </div>
  );
};

export default OutfitListEntry;
