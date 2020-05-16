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
      <h3>Related Products</h3>
      <br />
      {relatedProductEntries}
    </div>
  );
};

export default RelatedProductsList;
