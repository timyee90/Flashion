import React from 'react';

const Helpful = (props) => {
  const anchorStyle = {
    cursor: 'pointer',
    textDecorationLine: 'underLine',
  };
  const host = 'http://18.224.200.47';
  let endpoint;
  if (props.type === 'answer') {
    endpoint = host + `/qa/answer/${props.id}/helpful`;
  } else if (props.type === 'question') {
    endpoint = host + `/qa/question/${props.id}/helpful`;
  } else if (props.type === 'reviews') {
    endpoint = host + `/reviews/helpful/${props.id}`;
  }
  const count = props.count > 0 ? ` (${props.count})` : '0';

  const handleReport = () => {
    console.log('report', props.id);
  };

  const handleHelpfulClick = () => {
    console.log('helpful', props.id);
  };

  const handleAddAnswer = () => {
    console.log('answer', props.id);
  };
  const module =
    props.type === 'question' ? (
      <a style={anchorStyle} onClick={handleAddAnswer}>
        Add Answer
      </a>
    ) : (
      <a style={anchorStyle} onClick={handleReport}>
        Report
      </a>
    );
  return (
    <div>
      <p>
        Helpful?{' '}
        <a style={anchorStyle} onClick={handleHelpfulClick}>
          {' '}
          Yes
        </a>{' '}
        {count} |{'  '}
        {module}
      </p>
    </div>
  );
};
export default Helpful;
