import React, { useState } from 'react';
import {
  markAnswerHelpful,
  markQuestionHelpful,
  markReviewHelpful,
  reportAnswer,
  reportQuestion,
  reportReview,
} from '.././../../utils/queries';

const Helpful = (props) => {
  const [isReported, report] = useState(false);
  const anchorStyle = {
    cursor: 'pointer',
    textDecorationLine: 'underLine',
  };
  const count = props.count > 0 ? ` (${props.count})` : '0';

  const handleReport = () => {
    if (props.type === 'answer') {
      reportAnswer(props.id);
      report(true);
    }
    if (props.type === 'question') {
      reportQuestion(props.id);
    }
    if (props.type === 'review') {
      reportReview(props.id);
    }
  };

  const handleHelpfulClick = () => {
    if (props.type === 'answer') {
      markAnswerHelpful(props.id);
    }
    if (props.type === 'question') {
      markQuestionHelpful(props.id);
    }
    if (props.type === 'review') {
      markReviewHelpful(props.id);
    }
  };

  const handleAddAnswer = () => {
    console.log('adding answer to question', props.id);
  };
  const reportModule = isReported ? (
    <p>Reported</p>
  ) : (
    <a style={anchorStyle} onClick={handleReport}>
      Report
    </a>
  );
  const module =
    props.type === 'question' ? (
      <a style={anchorStyle} onClick={handleAddAnswer}>
        Add Answer
      </a>
    ) : (
      reportModule
    );
  return (
    <div>
      <div>
        Helpful?{' '}
        <a style={anchorStyle} onClick={handleHelpfulClick}>
          {' '}
          Yes
        </a>{' '}
        {count} |{'  '}
        {module}
      </div>
    </div>
  );
};
export default Helpful;
