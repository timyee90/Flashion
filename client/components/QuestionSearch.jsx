import React, { useState } from 'react';

const QuestionSearch = (props) => {
  const [search, changeSearchTerms] = useState('');
  const queryQuestionSearch = () => {};

  const handleChange = (e) => {
    changeSearchTerms(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          type='text'
          value={search}
          onChange={handleChange}
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        ></input>
        <input
          type='button'
          onClick={queryQuestionSearch}
          value={'SUBMIT'}
        ></input>
      </form>
    </div>
  );
};

export default QuestionSearch;
