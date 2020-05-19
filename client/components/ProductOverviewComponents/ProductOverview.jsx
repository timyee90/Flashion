import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard.jsx';
import ProductDescription from './ProductDescription.jsx';

const ProductOverview = (props) => {
  useEffect(() => {
    props.getProductData(props.productId);
  }, [props.productId]);

  return (
    <div className='MainProduct'>
      <ProductCard
        productInfo={props.productInfo}
        stylesInfo={props.stylesInfo}
        rating={props.averageRating}
        productId={props.productId}
      />
      <div className='BottomDescription'>
        <div className='Description'>
          <ProductDescription productInfo={props.productInfo} />
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
