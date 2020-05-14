import React, { useState } from 'react';

const QuestionSearch = (props) => {
  const [search, changeSearchTerms] = useState('');
  const queryQuestionSearch = () => {
    console.log(search);
  };
  return (
    <div>
      <form>
        <input type='text' value={search} onChange={changeSearchTerms}></input>
        <input
          type='button'
          onClick={queryQuestionSearch}
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        ></input>
      </form>
    </div>
  );
};

export default QuestionSearch;
