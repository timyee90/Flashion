import React from 'react';

const ProgressBar = (props) => {
  const progressBarStyle = {
    position: 'relative',
    height: '5px',
    width: '150px',
    'border-radius': '12.5%',
    border: '1px solid black',
  };
  const fillerStyle = {
    backgroundColor: 'black',
    height: '100%',
    'border-radius': 'inherit',
    width: `${props.percentage}%`,
  };
  return (
    <div className='progress-bar' style={progressBarStyle}>
      <div className='filler' style={fillerStyle}></div>
    </div>
  );
};

export default ProgressBar;
