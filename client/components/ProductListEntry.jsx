import React from 'react';

const ProductListEntry = ({ product }) => {
  // console.log(product);
  return (
    <div>
      {/* <img src={props.photos.thumbnail_url}></img> */}
      {/* <button></button> */}
      <div>
        <div>{product.category}</div>
        <div>{product.name}</div>
        {/* <div>{product.slogan}</div> */}
        <div>${product.default_price}</div>
        <div>Avg Rating</div>
      </div>
      <br />
    </div>
  );
};

export default ProductListEntry;
