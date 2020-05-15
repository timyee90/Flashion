import React, { useEffect, useState } from 'react';
import RelatedProductsListEntry from './RelatedProductsListEntry.jsx';
import ProductListImage from './ProductListImage.jsx';

const RelatedProductsList = (props) => {
  useEffect(() => {
    props.getRelatedProductIds(props.product_id);
    props.getProductStyles(props.product_id);
  }, [props.product_id]);

  //   console.log(`PROPS`, props);

  let relatedProductEntries = props.relatedProducts.relatedProducts.map(
    (relatedProduct) => {
      return (
        <RelatedProductsListEntry
          key={relatedProduct.id}
          product={relatedProduct}
          //   style={productStyles}
        />
      );
    }
  );
  //   let productStyles = props.relatedProducts.productStyles;

  //   //   for(let i=0; i< relatedProductEntries.length; i++){
  //   //     relatedProductEntries[i].push(productStyles[i])
  //   //   }
  //   console.log(`PRODUCT LIST ARRAY: `, relatedProductEntries);

  const productStyleArray = props.relatedProducts.productStyles.map((style) => {
    return <ProductListImage key={style.product_id} style={style} />;
  });

  return (
    <div>
      <h3>Related Products</h3>
      {productStyleArray}
      <br />
      {relatedProductEntries}
    </div>
  );
};

export default RelatedProductsList;
