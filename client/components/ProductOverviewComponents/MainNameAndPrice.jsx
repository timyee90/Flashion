import React from 'react';

const MainNameAndPrice = (props) => {
  return (
    <div>
      <p>{props.category}</p>
      <h1>{props.name}</h1>
      {props.salePrice > 0 ? (
        <span style={{ color: 'red' }}>
          ${props.salePrice}
          <span style={{ color: 'black' }}>{' - '}</span>
          <strike style={{ color: 'black' }}>${props.price}</strike>
        </span>
      ) : (
        <span>${props.price - 0.01}</span>
      )}
    </div>
  );
};

export default MainNameAndPrice;
