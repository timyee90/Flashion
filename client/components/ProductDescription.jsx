import React from 'react';

function ProductDescription(props) {
  const description = props.productInfo
    ? props.productInfo.description
    : 'description loading...';

  return (
    <div>
      <p>{description}</p>
    </div>
  );
}

export default ProductDescription;
