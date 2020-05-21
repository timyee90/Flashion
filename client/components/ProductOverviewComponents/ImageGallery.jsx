import React from 'react';

const ImageGallery = (props) => {
  return (
    <div className='Gallery'>
      <div className='sideImages'>
        {props.images.map((image, i) => {
          return (
            <img
              className='sideImage'
              src={image.thumbnail_url}
              key={i}
              style={{ width: '100%', height: '100%' }}
            />
          );
        })}
      </div>
      <button
        id='previousPicButton'
        onClick={(e) => {
          e.preventDefault();
          props.prevImage();
        }}
      >
        {'<'}
      </button>
      <img id='MainImage' src={props.display} />
      <button
        id='nextPicButton'
        onClick={(e) => {
          e.preventDefault();
          props.nextImage();
        }}
      >
        {'>'}
      </button>
    </div>
  );
};

export default ImageGallery;
