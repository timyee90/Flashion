import React, { useState } from 'react';
import QAAnswer from './QAAnswer.jsx';

const QAEntry = ({ qaData }) => {
  const [lessAnswers, loadMoreAnswers] = useState(false);
  let answers;
  let loadMoreAnswersBtn = '';
  const handleLoadMoreAnswers = () => {
    loadMoreAnswers(true);
  };
  if (qaData.answers.length > 2) {
    loadMoreAnswersBtn = (
      <p onClick={handleLoadMoreAnswers}>SHOW MORE ANSWERS</p>
    );
  }
  if (lessAnswers === false) {
    answers = (
      <div>
        <Answers info={Object.values(qaData.answers[0])} />
        <Answers info={Object.values(qaData.answers[1])} />
      </div>
    );
  } else {
    answers = Object.values(qaData.answers).map((answer) => {
      return <Answers info={answer} />;
    });
  }
  return (
    <div>
      <div>
        <p>Q: {qaData.question_body}</p>
        <p>
          Helpful? <a href=''>Yes</a> ({qaData.question_helpfulness}) |{' '}
          <a href=''>Add Answer</a>
        </p>
      </div>
      {answers}
    </div>
  );
};

export default QAEntry;
