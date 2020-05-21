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
  const [isHelpful, helpful] = useState(false);
  const anchorStyle = {
    cursor: 'pointer',
    textDecorationLine: 'underLine',
  };
  const count =
    props.count > 0 ? ` (${props.count + (isHelpful ? 1 : 0)})` : '0';
  const showHelpful = isHelpful ? 'Voted' : 'Yes';
  const handleReport = () => {
    if (props.type === 'answer') {
      reportAnswer(props.id);
      report(true);
    }
    if (props.type === 'question') {
      reportQuestion(props.id);
    }
    if (props.type === 'reviews') {
      reportReview(props.id);
    }
  };

  const handleHelpfulClick = () => {
    if (isHelpful === false) {
      if (props.type === 'answer') {
        markAnswerHelpful(props.id);
        helpful(true);
      }
      if (props.type === 'question') {
        markQuestionHelpful(props.id);
        helpful(true);
      }
      if (props.type === 'reviews') {
        markReviewHelpful(props.id);
        helpful(true);
      }
    }
  };

  const handleAddAnswer = () => {
    props.showModal();
  };
  const reportModule = isReported ? (
    <div>Reported</div>
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
    <div className='helpfulContainer'>
      <div>Helpful? </div>
      <div>
        <a style={anchorStyle} onClick={handleHelpfulClick}>
          {showHelpful}
        </a>
      </div>
      <div>{count}</div>
      <div>|</div>
      <div>{module}</div>
    </div>
  );
};
export default Helpful;
