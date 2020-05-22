import React, { useEffect, useState } from 'react';
import RelatedProductsListEntry from './RelatedProductsListEntry.jsx';

const RelatedProductsList = (props) => {
  useEffect(() => {
    props.getRelatedProductIds(props.product_id);
    props.getCurrentProductInfo(props.product_id);
  }, [props.product_id]);

  const productLength = props.relatedProducts.relatedProducts.length;
  const [range, setRange] = useState([0, 4]);

  const handleRightArrow = () => {
    if (range[1] < productLength) {
      setRange([range[0] + 1, range[1] + 1]);
    }
  };

  const handleLeftArrow = () => {
    if (range[0] > 0) {
      setRange([range[0] - 1, range[1] - 1]);
    }
  };

  const leftArrow =
    range[0] !== 0 ? (
      <div className='left arrow' onClick={handleLeftArrow}>
        <span className='glyphicon glyphicon-arrow-left btn-arrow'></span>
      </div>
    ) : (
      ''
    );

  const rightArrow =
    range[1] !== productLength && productLength >= 4 ? (
      <div className='right arrow' onClick={handleRightArrow}>
        <span className='glyphicon glyphicon-arrow-right btn-arrow'></span>
      </div>
    ) : (
      ''
    );

  const relatedProductEntries = props.relatedProducts.relatedProducts
    .slice(range[0], range[1])
    .map((relatedProduct) => {
      return (
        <RelatedProductsListEntry
          className='product-container'
          setProductId={(id) => {
            props.setProductID(id);
          }}
          id={relatedProduct[0].id}
          key={relatedProduct[0].id}
          product={relatedProduct[0]}
          style={relatedProduct[1]}
          rating={relatedProduct[2]}
          currentId={props.product_id}
          currentProd={props.relatedProducts.currentProductInfo}
        />
      );
    });

  return (
    <div>
      <h3 className='related products-title'>Related Products</h3>
      <div className='carousel-container'>
        {leftArrow}
        {relatedProductEntries}
        {rightArrow}
      </div>
    </div>
  );
};

export default RelatedProductsList;
