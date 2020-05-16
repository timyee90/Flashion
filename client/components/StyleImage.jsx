import React from 'react';

function StyleImage(props) {
  return <img src={props.style.photos[0].thumbnail_url} id='StyleImage' />;
}

export default StyleImage;
