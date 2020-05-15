import React from 'react';
import moment from 'moment';
import Helpful from './Helpful.jsx';

const Answer = ({ info }) => {
  const photos =
    info.photos.length > 0 ? (
      <div>
        {info.photos.map((photo) => {
          return (
            <div
              style={{
                textAlign: 'center',
                height: '100px',
                width: '100px',
                objectFit: 'contain',
                backgroundColor: 'wheat',
              }}
            >
              <img src={photo} style={{ 'max-height': '100px' }} />
            </div>
          );
        })}
      </div>
    ) : (
      ''
    );
  return (
    <div>
      <p>{info.body}</p>
      {photos}
      <p>
        by {info.answerer_name}, {moment(info.date).format('MMMM DD, YYYY')} |{' '}
      </p>
      <Helpful count={info.helpfulness} type={'answer'} />
    </div>
  );
};

export default Answer;
