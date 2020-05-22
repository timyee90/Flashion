import React from 'react';
import FBLogo from '../../../dist/images/FB_Logo.png';
import Twitter from '../../../dist/images/Twitter.png';
import Pinterest from '../../../dist/images/Pinterest.png';

const MainNameAndPrice = (props) => {
  return (
    <div>
      <p>{props.category}</p>
      <span className='NameAndSocial'>
        <h1 style={{ marginTop: '16px', marginBottom: '18px' }}>
          {props.name}
          <a href='https://www.facebook.com/'>
            <img
              src={FBLogo}
              style={{
                width: '25px',
                height: '25px',
                marginLeft: '10px',
                marginRight: '10px',
              }}
            />
          </a>
          <a href='https://www.twitter.com/'>
            <img
              src={Twitter}
              style={{ width: '25px', height: '25px', marginRight: '8px' }}
            />
          </a>
          <a href='https://www.pinterest.com/'>
            <img
              src={Pinterest}
              style={{ width: '31px', height: '31px', marginTop: '1px' }}
            />
          </a>
        </h1>
      </span>
      {props.salePrice > 0 ? (
        <span style={{ color: 'red' }}>
          ${props.salePrice}
          <span style={{ color: 'black' }}>{' - '}</span>
          <strike style={{ color: 'black' }}>${props.price}</strike>
        </span>
      ) : (
        <span>${props.price - 0.01}</span>
      )}
      <p></p>
    </div>
  );
};

export default MainNameAndPrice;
