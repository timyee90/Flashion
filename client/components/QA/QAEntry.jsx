import React, { useState } from 'react';
import QAAnswer from './QAAnswer.jsx';
import Helpful from '../RatingsReviews/Helpful.jsx';

const QAEntry = ({ qaInfo }) => {
  const [moreAnswers, loadMoreAnswers] = useState(false);
  const [toggleBtnText, changeToggleBtnText] = useState('LOAD MORE ANSWERS');
  const answersArray = Object.values(qaInfo.answers);
  let loadMoreAnswersBtn = '';

  const handleLoadMoreAnswers = () => {
    loadMoreAnswers(!moreAnswers);
    let text = moreAnswers ? 'LOAD MORE ANSWERS' : 'HIDE ANSWERS';
    changeToggleBtnText(text);
  };
  if (answersArray.length > 2) {
    loadMoreAnswersBtn = (
      <div className='bold' onClick={handleLoadMoreAnswers}>
        {toggleBtnText}
      </div>
    );
  }
  const allAnswers = answersArray.map((answer, index) => {
    return <QAAnswer key={index} info={answer} />;
  });
  let answers = !moreAnswers ? allAnswers.slice(0, 2) : (answers = allAnswers);

  return (
    <div className='QAEntry'>
      <div className='QAHeader'>
        <div className='bold fs32 left-shift'>Q:</div>
        <div className='QAQHelpful'>
          <div className='question bold fs32'>{qaInfo.question_body}</div>
          <div className='helpful'>
            <Helpful
              type={'question'}
              count={qaInfo.question_helpfulness}
              id={qaInfo.question_id}
            />
          </div>
        </div>
      </div>
      <div className='AnswerSection'>
        <div className='bold fs32 left-shift'>A:</div>
        <div>
          {answers}
          {loadMoreAnswersBtn}
        </div>
      </div>
    </div>
  );
};

export default QAEntry;
