import React from 'react';

const BarRatingGauge = (props) => {
  const gaugeStyle = {
    position: 'relative',
    height: '8px',
    borderRadius: '12.5%',
    backgroundColor: '#f0f0f0',
  };
  const value = props.value ? `${(props.value / 5) * 100}%` : '0%';
  const arrowPos = {
    position: 'relative',
    left: value,
    margin: 0,
  };
  const labelTags = {
    Size: ['Too small', 'Perfect', 'Too Large'],
    Comfort: ['Poor', 'Ok', 'Perfect'],
    Fit: ['Runs tight', 'Perfect', 'Runs long'],
    Length: ['Runs short', 'Perfect', 'Runs long'],
    Quality: ['Poor', 'What I expected', 'Perfect'],
    Width: ['Runs tight', 'Perfect', 'Runs wide'],
  };
  const labels = labelTags[props.category].map((label) => {
    return <div>{label}</div>;
  });
  return (
    <div className='characteristics-bar'>
      <div className='bold'>{props.category}</div>

      <div style={gaugeStyle} className='bar-gauge'>
        <div className='gauge-arrow' style={arrowPos}></div>
      </div>
      <div className='bar-gauge-labels flex-row'>{labels}</div>
    </div>
  );
};

export default BarRatingGauge;
