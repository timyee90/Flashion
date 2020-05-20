import React, { useState } from 'react';
import QAAnswer from './QAAnswer.jsx';
import Helpful from '../RatingsReviews/Helpful.jsx';

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
    <div className='QAEntry'>
      <div>
        <div className='QAHeader'>
          <h4>Q:</h4>
          <div className='QAQHelpful'>
            <div className='question'>
              <h4>{qaInfo.question_body}</h4>
            </div>
            <div className='helpful'>
              <Helpful
                type={'question'}
                count={qaInfo.question_helpfulness}
                id={qaInfo.question_id}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='AnswerSection'>
        <h4>A:</h4>
        <div>
          {answers}
          {loadMoreAnswersBtn}
        </div>
      </div>
    </div>
  );
};

export default QAEntry;
