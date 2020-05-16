import React from 'react';
import { computeAverageRating } from '../../utils/computeRatingAverage.js';

const ProductListEntry = ({ product, style, rating }) => {
  let url = style.results[0].photos[0].thumbnail_url;
  let averageRating = Number(computeAverageRating(rating.results)).toFixed(1);
  return (
    <div>
      <img src={url ? url : 'NO IMAGE'}></img>
      {/* <button></button> */}
      <div>
        <div>{product.category}</div>
        <div>{product.name}</div>
        <div>${product.default_price}</div>
        <div>Avg Rating: {averageRating}</div>
      </div>
      <br />
    </div>
  );
};

export default ProductListEntry;
