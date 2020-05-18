import React from 'react';

const ProgressBar = (props) => {
  const progressBarStyle = {
    position: 'relative',
    height: '5px',
    width: '150px',
    borderRadius: '12.5%',
    border: '1px solid black',
  };
  const fillerStyle = {
    backgroundColor: 'green',
    height: '100%',
    borderRadius: 'inherit',
    width: `${props.percentage}%`,
  };
  return (
    <div className='progress-bar' style={progressBarStyle}>
      <div className='filler' style={fillerStyle}></div>
    </div>
  );
};

export default ProgressBar;
