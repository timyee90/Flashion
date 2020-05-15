import React, { useEffect, useState } from 'react';
import RelatedProductsListEntry from './RelatedProductsListEntry.jsx';

const RelatedProductsList = (props) => {
  useEffect(() => {
    props.getRelatedProductIds(26);
  }, []);

  const relatedProductEntries = props.relatedProducts.relatedProducts.map(
    (relatedProduct) => {
      return (
        <RelatedProductsListEntry
          key={relatedProduct.id}
          product={relatedProduct}
        />
      );
    }
  );

  return (
    <div>
      <h3>Related Products</h3>
      {relatedProductEntries}
    </div>
  );
};

export default RelatedProductsList;
