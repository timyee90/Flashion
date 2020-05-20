import React, { useState, useEffect } from 'react';

const QuestionSearch = (props) => {
  const [search, changeSearchTerms] = useState('');

  const handleChange = (e) => {
    changeSearchTerms(e.target.value);
  };

  useEffect(() => {
    props.keywordSearch(search);
  }, [search]);

  return (
    <div>
      <form>
        <input
          style={{ border: 0, width: '90%' }}
          type='text'
          value={search}
          onChange={handleChange}
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
          className='questionSearch'></input>
      </form>
    </div>
  );
};

export default QuestionSearch;
