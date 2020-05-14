import React, { useEffect } from 'react';
import QuestionSearch from './QuestionSearch.jsx';
import QAEntry from './QAEntry.jsx';
import QAButtons from './QAButtons.jsx';

const QASection = (props) => {
  const QAEntries = props.entries.map((qa) => {
    return <QAEntry qaInfo={qa} />;
  });
  return (
    <div>
      <h3>Questions & Answers</h3>
      <QuestionSearch />
      {QAEntries}
      <QAButtons />
    </div>
  );
};

export default QASection;
