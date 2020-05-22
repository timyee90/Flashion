import React from 'react';
import $ from 'jquery';

function SizeQuantityForm(props) {
  const sizes = [];

  for (let key in props.style.skus) {
    if (props.style.skus[key] > 0) {
      sizes.push(key);
    } else {
      sizes.push('OUT OF STOCK');
    }
  }

  function getQuantities() {
    function howMany() {
      if (props.style.skus[props.currentSize] < 15) {
        return props.style.skus[props.currentSize];
      } else if (props.style.skus[props.currentSize] === undefined) {
        return '-';
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
        {sizes.map((size, i) => {
          return (
            <option value={size} key={i}>
              {size}
            </option>
          );
        })}
      </select>
      <select id='quantities'>
        {props.currentSize ? (
          getQuantities().map((num, i) => {
            return (
              <option value={num} key={i}>
                {num}
              </option>
            );
          })
        ) : (
          <option value='-'>-</option>
        )}
      </select>
      {props.currentSize !== 'OUT OF STOCK' ? (
        <button
          id='addToCart'
          onClick={(e) => {
            e.preventDefault();
            console.log(props.currentSize);
            if (props.currentSize === '') {
              $('#sizes').trigger('click');
            }
          }}
        >
          Add to Cart
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

export default SizeQuantityForm;
