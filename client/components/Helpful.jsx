import React from 'react';

const Helpful = (props) => {
  const count = props.count > 0 ? ` (${props.count})` : '0';
  return (
    <div>
      <p>
        Helpful?{' '}
        <a href={'placeholder' /*click handler for helpful count*/}> Yes</a>{' '}
        {count} |{' '}
        <a href={'placeholder' /*click handler for report */}>Report</a>
      </p>
    </div>
  );
};
export default Helpful;
