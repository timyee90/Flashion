import React from 'react';

function SizeQuantityForm(props) {
  const sizes = [];

  for (let key in props.style.skus) {
    sizes.push(key);
  }

  function getQuantities() {
    function howMany() {
      if (props.style.skus[props.currentSize] < 15) {
        return props.style.skus[props.currentSize];
      } else {
        return 15;
      }
    }
    const quantities = [];

    for (let i = 1; i <= howMany(); i++) {
      quantities.push(i);
    }

    return quantities;
  }

  return (
    <div className='SizeForm'>
      <select
        id='sizes'
        onChange={(e) => {
          props.changeSize(e.target.value);
        }}
      >
        <option value=''>SELECT SIZE</option>
        {sizes.map((size) => {
          return (
            <option key={size} value={size}>
              {size}
            </option>
          );
        })}
      </select>
      <select id='quantities'>
        {props.currentSize ? (
          getQuantities().map((num) => {
            return <option value={num}>{num}</option>;
          })
        ) : (
          <option value='-'>-</option>
        )}
      </select>
      <button id='addToCart'>Add to Cart</button>
    </div>
  );
}

export default SizeQuantityForm;
