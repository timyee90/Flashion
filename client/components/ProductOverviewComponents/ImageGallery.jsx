import React from 'react';

const ImageGallery = (props) => {
  return (
    <div className='Gallery'>
      <div className='sideImages'>
        {props.images.map((image, i) => {
          return props.showFullScreen ? (
            <img
              className='sideImage'
              src={image.thumbnail_url}
              key={i}
              style={{ width: '80%', height: '150%' }}
            />
          ) : (
            <img
              className='sideImage'
              src={image.thumbnail_url}
              key={i}
              style={{ width: '110%', height: '110%' }}
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
      <div id='nextAndFullButtons'>
        <button
          id='fullscreen'
          onClick={(e) => {
            e.preventDefault();
            props.fullDisplay();
          }}
        >
          Full Screen
        </button>
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
    </div>
  );
};

export default ImageGallery;
