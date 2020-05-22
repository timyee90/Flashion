import React from 'react';

function StyleImage(props) {
  if (props.styleIndex === props.currentStyleIndex) {
    return (
      <img
        src={props.style.photos[0].thumbnail_url}
        id='StyleImage'
        onClick={(e) => {
          e.preventDefault();
          props.changeCurrentStyle(props.style, props.styleIndex);
        }}
        style={{ border: 'solid 3px black' }}
      />
    );
  } else {
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
}

export default StyleImage;
