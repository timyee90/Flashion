import React from 'react';

const Helpful = (props) => {
  return (
    <div>
      <p>
        Helpful?{' '}
        <a href={'placeholder' /*click handler for helpful count*/}> Yes </a>
        {props.count} |{' '}
        <a href={'placeholder' /*click handler for report */}>Report</a>
      </p>
    </div>
  );
};
export default Helpful;
