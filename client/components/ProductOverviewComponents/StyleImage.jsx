import React from 'react';

function StyleImage(props) {
  return (
    <img
      src={props.style.photos[0].thumbnail_url}
      id='StyleImage'
      onClick={(e) => {
        e.preventDefault();
        props.changeCurrentStyle(props.style, props.styleIndex);
      }}
    />
  );
}

export default StyleImage;
