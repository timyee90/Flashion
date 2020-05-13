import React from 'react';

const ProductListEntry = (props) => {
  return (
    <div>
      {/* <img src={props.photos.thumbnail_url}></img> */}
      {/* <button></button> */}
      <div>
        <div>Category</div>
        <div>Product Name</div>
        <div>Price</div>
        <div>Avg Rating</div>
      </div>
    </div>
  );
};

export default ProductListEntry;
