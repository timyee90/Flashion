import React from 'react';

const ProductListImage = (props) => {
  //   console.log(props.style.results[0].photos[0].thumbnail_url);
  let url = props.style.results[0].photos[0].thumbnail_url;
  return (
    <div>
      <img src={url ? url : 'NO IMAGE'} />
    </div>
  );
};

export default ProductListImage;
