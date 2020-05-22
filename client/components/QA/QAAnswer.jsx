import React from 'react';
import moment from 'moment';
import Helpful from '../RatingsReviews/Helpful.jsx';

const Answer = ({ info }) => {
  const photos =
    info.photos.length > 0 ? (
      <div className='QAPhotos'>
        {info.photos.map((photo, index) => {
          return (
            <div
              key={index}
              style={{
                textAlign: 'center',
                height: '75px',
                width: '140px',
                objectFit: 'contain',
                backgroundColor: '#C0C0C0',
                border: '1px solid black',
                marginRight: '15-px',
              }}>
              <img src={photo} style={{ maxHeight: '75px' }} />
            </div>
          );
        })}
      </div>
    ) : (
      ''
    );
  return (
    <div className='QAAnswer'>
      <p>{info.body}</p>
      {photos}
      <div className='QAFooter'>
        <div className='userDate'>
          by {info.answerer_name}, {moment(info.date).format('MMMM DD, YYYY')} |
        </div>
        <div>
          <Helpful count={info.helpfulness} type={'answer'} id={info.id} />
        </div>
      </div>
    </div>
  );
};

export default Answer;
