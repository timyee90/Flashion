import React from 'react';

const ImageGallery = (props) => {
  return (
    <div>
      <img src={props.display} />
    </div>
  );
};

export default ImageGallery;
