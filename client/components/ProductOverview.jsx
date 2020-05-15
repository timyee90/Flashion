import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard.jsx';
import ProductDescription from './ProductDescription.jsx';

const ProductOverview = (props) => {
  useEffect(() => {
    props.getProductData(props.product_id);
  }, [props.product_id]);

  // console.log('PROPS STYLES', props.stylesInfo);

  return (
    <div className='MainProduct'>
      <ProductCard
        productInfo={props.productInfo}
        stylesInfo={props.stylesInfo}
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
