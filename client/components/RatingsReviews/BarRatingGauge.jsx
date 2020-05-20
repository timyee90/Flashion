import React from 'react';
import HorizontalGauge from 'react-horizontal-gauge';

const BarRatingGauge = (props) => {
  return (
    <div>
      {props.category}
      <br />
      {/* <HorizontalGauge height={40} width={200} /> */}
    </div>
  );
};

export default BarRatingGauge;
