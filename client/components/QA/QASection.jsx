import React, { useEffect, useState } from 'react';
import QuestionSearch from './QuestionSearch.jsx';
import QAEntry from './QAEntry.jsx';
import QAButtons from './QAButtons.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';

const QASection = (props) => {
  const [keywordSearch, setKeywordSearch] = useState(0);
  const [questionsShown, showMore] = useState(2);
  const [modalVisibility, setModalVisibility] = useState(false);

  const showMoreQuestions = () => {
    showMore((prev) => prev + 2);
  };

  const showModal = () => {
    setModalVisibility(true);
  };
  const hideModal = () => {
    setModalVisibility(false);
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
  const count = props.entries ? allQAEntries.length : 0;
  const noCountDiv =
    count === 0 ? (
      <div className='noCount'>
        <div className='fs32 bold'>
          {' '}
          Uh oh... No questions match your keyword :(
        </div>
      </div>
    ) : null;
  return (
    <div className='QAContainer'>
      <div className='QASection'>
        <div className='sectionTitle'>Questions & Answers</div>
        <div className='QASearch'>
          <QuestionSearch keywordSearch={handleQuestionSearch} />
        </div>
        {noCountDiv}
        {QAEntries}
        <QAButtons
          showMore={showMoreQuestions}
          count={count}
          currentlyShown={questionsShown}
          showModal={showModal}
        />
      </div>
      <AddQuestionModal
        handleClose={hideModal}
        show={modalVisibility}
        product_id={props.product_id}
      />
    </div>
  );
};

export default QASection;
