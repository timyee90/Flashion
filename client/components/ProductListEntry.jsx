import React, { useState, useEffect } from 'react';
import { computeAverageRating } from '../../utils/computeRatingAverage.js';
import { comparison } from '../../utils/queries.js';
import Modal from 'react-modal';

const ProductListEntry = ({
  id,
  product,
  style,
  rating,
  setProductId,
  currentId,
}) => {
  let url =
    style.results.length > 0 ? style.results[0].photos[0].thumbnail_url : '';
  let averageRating = Number(computeAverageRating(rating.results)).toFixed(1);
  if (!url) {
    return null;
  }

  const [productComparison, getProductComparison] = useState([]);
  useEffect(() => {
    getProductComparison(comparison(id, currentId));
  }, []);

  // const customStyles = {
  //   content: {
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '50%',
  //     transform: 'translate(-50%, -50%)',
  //   },
  // };

  // Modal.setAppElement(document.getElementById('app'));

  return (
    <div>
      <img src={url} onClick={() => setProductId(id)}></img>
      {/* <Modal isOpen={true} styles={customStyles} closeTimeoutMS={0} /> */}
      <button
        onClick={() => {
          productComparison.then((data) => {
            let prod1 = data[0];
            let prod2 = data[1];
            console.log(`product comparison data: `, data);
          });
        }}
        type='button'
        className='btn btn-default btn-sm btn-overlap'
      >
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
