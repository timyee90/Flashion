import React, { useState } from 'react';

const QuestionSearch = (props) => {
  const [search, changeSearchTerms] = useState('');
  return (
    <div>
      <form>
        <input type='text' value={search} onChange={changeSearchTerms}></input>
        <input
          type='button'
          onClick={/*props.querySearch */}
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        ></input>
      </form>
    </div>
  );
};

export default QuestionSearch;
