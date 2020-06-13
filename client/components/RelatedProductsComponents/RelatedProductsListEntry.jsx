import React, { useState } from 'react';
import { computeAverageRating } from '../../../utils/computeRatingAverage.js';
import { compareProducts } from '../../../utils/comparison.js';
import StarRatingModule from 'react-star-ratings';

const RelatedProductsListEntry = ({
  id,
  product,
  style,
  rating,
  setProductId,
  currentProd,
}) => {
  const [displayModal, toggleModal] = useState('modal-hide-rel-prod');

  const url = style.results[0].photos[0].thumbnail_url;
  const averageRating = Number(computeAverageRating(rating.results));

  const comparisonResults = compareProducts(
    currentProd.features,
    product.features
  );

  const productComparisonData = (
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
          {comparisonResults.map((row, rowId) => {
            return (
              <tr key={rowId}>
                {row.map((data, id) => {
                  return (
                    <td key={id}>
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
      <div>
        <button
          onClick={() => {
            toggleModal('modal-show-rel-prod');
          }}
          type='button'
          className='btn btn-default btn-sm btn-overlap'
        >
          <span className='glyphicon glyphicon-star star-btn'></span>
        </button>
        <div onClick={() => setProductId(id)}>
          <img className='rel-prod-img' src={url}></img>
          <div>{product.category}</div>
          <div>{product.name}</div>
          <div>${product.default_price}</div>
          <div>{star}</div>
        </div>
      </div>

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
