import React from 'react';

const QAButtons = (props) => {
  const showMoreBtn =
    props.count > 2 && props.currentlyShown < props.count ? (
      <input
        className='btn bold fs32'
        type='button'
        value='MORE ANSWERED QUESTIONS'
        onClick={props.showMore}></input>
    ) : (
      ''
    );
  return (
    <div>
      {showMoreBtn}
      <input
        className='btn bold fs32'
        type='button'
        value='ADD A QUESTION + '></input>
    </div>
  );
};

export default QAButtons;
