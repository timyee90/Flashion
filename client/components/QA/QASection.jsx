import React, { useEffect, useState } from 'react';
import QuestionSearch from './QuestionSearch.jsx';
import QAEntry from './QAEntry.jsx';
import QAButtons from './QAButtons.jsx';

const QASection = (props) => {
  const [areQuestionsHidden, toggleHideQuestions] = useState(true);
  const [keywordSearch, setKeywordSearch] = useState(0);
  const [questionsShown, showMore] = useState(2);

  const showMoreQuestions = () => {
    showMore((prev) => prev + 2);
  };

  useEffect(() => {
    props.getQAData(props.product_id);
  }, [props.product_id]);

  const allQAEntries =
    keywordSearch.length < 3
      ? props.entries.map((qa, index) => {
          return <QAEntry key={index} qaInfo={qa} />;
        })
      : props.entries
          .filter((entry) => {
            return RegExp(keywordSearch, 'gi').test(entry.question_body);
          })
          .map((qa, index) => {
            return <QAEntry key={index} qaInfo={qa} />;
          });
  const QAEntries = allQAEntries.slice(0, questionsShown);
  const handleQuestionSearch = (keyword) => {
    setKeywordSearch(keyword);
  };
  const count = props.entries ? props.entries.length : 0;
  return (
    <div className='QAContainer'>
      <div className='QASection'>
        <h3>Questions & Answers</h3>
        <div className='QASearch'>
          <QuestionSearch keywordSearch={handleQuestionSearch} />
        </div>
        {QAEntries}
        <QAButtons
          showMore={showMoreQuestions}
          count={count}
          currentlyShown={questionsShown}
        />
      </div>
    </div>
  );
};

export default QASection;
