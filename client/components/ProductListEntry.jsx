import React from 'react';
import { computeAverageRating } from '../../utils/computeRatingAverage.js';

const ProductListEntry = ({ id, product, style, rating, setProductId }) => {
  let url =
    style.results.length > 0 ? style.results[0].photos[0].thumbnail_url : '';
  let averageRating = Number(computeAverageRating(rating.results)).toFixed(1);
  if (!url) {
    return null;
  }

  return (
    <div>
      <img src={url} onClick={() => setProductId(id)}></img>
      <button type='button' className='btn btn-default btn-sm btn-overlap'>
        <span className='glyphicon glyphicon-star'></span>
      </button>
      <div onClick={() => setProductId(id)}>{product.category}</div>
      <div onClick={() => setProductId(id)}>{product.name}</div>
      <div onClick={() => setProductId(id)}>${product.default_price}</div>
      <div onClick={() => setProductId(id)}>Avg Rating: {averageRating}</div>
    </div>
  );
};

export default ProductListEntry;
