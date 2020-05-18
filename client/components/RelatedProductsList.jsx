import React, { useEffect, useState } from 'react';
import RelatedProductsListEntry from './RelatedProductsListEntry.jsx';

const RelatedProductsList = (props) => {
  useEffect(() => {
    props.getRelatedProductIds(props.product_id);
  }, [props.product_id]);

  let relatedProductEntries = props.relatedProducts.relatedProducts.map(
    (relatedProduct) => {
      return (
        <RelatedProductsListEntry
          setProductId={(id) => {
            props.setProductID(id);
          }}
          className='product-container'
          id={relatedProduct[0].id}
          key={relatedProduct[0].id}
          product={relatedProduct[0]}
          style={relatedProduct[1]}
          rating={relatedProduct[2]}
        />
      );
    }
  );

  return (
    <div>
      <h3 className='related-products-title'>Related Products</h3>
      <div className='carousel-container'>{relatedProductEntries}</div>
    </div>
  );
};

export default RelatedProductsList;
