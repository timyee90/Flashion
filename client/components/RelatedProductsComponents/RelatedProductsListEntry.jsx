import React, { useState, useEffect } from 'react';
import { computeAverageRating } from '../../../utils/computeRatingAverage.js';
import { compareProducts } from '../../../utils/comparison.js';
import StarRatingModule from 'react-star-ratings';

const RelatedProductsListEntry = ({
  id,
  product,
  style,
  rating,
  setProductId,
  currentId,
  currentProd,
}) => {
  const [displayModal, toggleModal] = useState('modal-hide-rel-prod');

  let url =
    style.results.length > 0 ? style.results[0].photos[0].thumbnail_url : '';
  let averageRating = Number(computeAverageRating(rating.results));

  if (!url) {
    return null;
  }

  let comparisonResults = compareProducts(
    currentProd.features,
    product.features
  );

  let productComparisonData = (
    <div>
      <table id='modal'>
        <thead>
          <tr>
            <th>Current Product</th>
            <th>Feature</th>
            <th>Related Product</th>
          </tr>
        </thead>
        <tbody>
          {comparisonResults.map((row) => {
            return (
              <tr>
                {row.map((data) => {
                  return (
                    <td>
                      {data === true ? (
                        <span>&#10003;</span>
                      ) : data === false ? (
                        ''
                      ) : (
                        data
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  const handleClose = () => {
    toggleModal('modal-hide-rel-prod');
  };

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
          toggleModal('modal-show-rel-prod');
        }}
        type='button'
        className='btn btn-default btn-sm btn-overlap'
      >
        <span className='glyphicon glyphicon-star star-btn'></span>
      </button>
      <div onClick={() => setProductId(id)}>{product.category}</div>
      <div onClick={() => setProductId(id)}>{product.name}</div>
      <div onClick={() => setProductId(id)}>${product.default_price}</div>
      <div onClick={() => setProductId(id)}>{star}</div>

      <aside role='dialog'>
        <div className={displayModal}>
          <div className='modal-main-rel-prod'>
            <div>{productComparisonData ? productComparisonData : ''}</div>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default RelatedProductsListEntry;
