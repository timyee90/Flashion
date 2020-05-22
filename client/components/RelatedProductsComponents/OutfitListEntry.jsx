import React, { useState, useEffect } from 'react';
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
  let url = style.results[0].photos[0].thumbnail_url;
  let averageRating = Number(computeAverageRating(rating.results));

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
          remove(id);
        }}
        type='button'
        className='btn btn-default btn-sm btn-overlap'
      >
        <span className='glyphicon glyphicon-remove remove-btn'></span>
      </button>
      <div onClick={() => setProductId(id)}>{product.category}</div>
      <div onClick={() => setProductId(id)}>{product.name}</div>
      <div onClick={() => setProductId(id)}>${product.default_price}</div>
      <div onClick={() => setProductId(id)}>{star}</div>
    </div>
  );
};

export default OutfitListEntry;
