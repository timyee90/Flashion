import React from 'react';

const MainNameAndPrice = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>${props.price - 0.01}</p>
    </div>
  );
};

export default MainNameAndPrice;
