import React from 'react';

function ProductDescription(props) {
  const description = props.productInfo
    ? props.productInfo.description
    : 'description loading...';

  const slogan = props.productInfo
    ? props.productInfo.slogan
    : 'slogan loading...';

  return (
    <div>
      <h4>{slogan}</h4>
      <p>{description}</p>
    </div>
  );
}

export default ProductDescription;
