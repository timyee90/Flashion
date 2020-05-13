import React from 'react';

const Helpful = (props) => {
  return (
    <p>
      Helpful?{' '}
      <a href={'placeholder' /*click handler for helpful count*/}> Yes </a>
      {props.count} |{' '}
      <a href={'placeholder' /*click handler for report */}>Report</a>
    </p>
  );
};
export default Helpful;
