import React, { useEffect, useState } from 'react';
import QuestionSearch from './QuestionSearch.jsx';
import QAEntry from './QAEntry.jsx';
import QAButtons from './QAButtons.jsx';

const QASection = (props) => {
  const [areQuestionsHidden, toggleHideQuestions] = useState(true);

  const toggleHide = () => {
    toggleHideQuestions(!areQuestionsHidden);
  };

  useEffect(() => {
    props.getQAData(23);
  }, []);

  const allQAEntries = props.entries.map((qa, index) => {
    return <QAEntry key={index} qaInfo={qa} />;
  });

  const QAEntries = areQuestionsHidden
    ? allQAEntries.slice(0, 2)
    : allQAEntries;

  return (
    <div>
      <h3>Questions & Answers</h3>
      <QuestionSearch />
      {QAEntries}
      <QAButtons toggleHide={toggleHide} />
    </div>
  );
};

export default QASection;
