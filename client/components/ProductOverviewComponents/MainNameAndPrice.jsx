import React from 'react';

const MainNameAndPrice = (props) => {
  return (
    <div>
      <p>{props.category}</p>
      <h1>{props.name}</h1>
      <p>${props.price - 0.01}</p>
    </div>
  );
};

export default MainNameAndPrice;
