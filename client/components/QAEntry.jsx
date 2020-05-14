import React, { useState } from 'react';
import QAAnswer from './QAAnswer.jsx';
import Helpful from './Helpful.jsx';

const QAEntry = ({ qaInfo }) => {
  const [moreAnswers, loadMoreAnswers] = useState(false);
  const [toggleBtnText, changeToggleBtnText] = useState('SHOW MORE ANSWERS');
  const answersArray = Object.values(qaInfo.answers);
  let loadMoreAnswersBtn = '';

  const handleLoadMoreAnswers = () => {
    loadMoreAnswers(!moreAnswers);
    let text = moreAnswers ? 'SHOW MORE ANSWERS' : 'HIDE ANSWERS';
    changeToggleBtnText(text);
  };
  if (answersArray.length > 2) {
    loadMoreAnswersBtn = <p onClick={handleLoadMoreAnswers}>{toggleBtnText}</p>;
  }
  const allAnswers = answersArray.map((answer, index) => {
    return <QAAnswer key={index} info={answer} />;
  });
  let answers = !moreAnswers ? allAnswers.slice(0, 2) : (answers = allAnswers);

  return (
    <div>
      <div>
        <p>Q: {qaInfo.question_body}</p>
        <Helpful type={'question'} />
      </div>
      {answers}
      {loadMoreAnswersBtn}
    </div>
  );
};

export default QAEntry;
