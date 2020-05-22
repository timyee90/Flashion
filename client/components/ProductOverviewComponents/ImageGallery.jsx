import React from 'react';
import fullscreen from '../../../dist/images/full-screen.png';

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
              style={{ width: '50px', height: '150%' }}
              onClick={(e) => {
                e.preventDefault();
                props.changePic(i);
              }}
            />
          ) : (
            <img
              className='sideImage'
              src={image.thumbnail_url}
              key={i}
              style={{ width: '110%', height: '110%' }}
              onClick={(e) => {
                e.preventDefault();
                props.changePic(i);
              }}
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
          <img src={fullscreen} style={{ width: '25px', height: '25px' }} />
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
