import React from 'react';

const QAButtons = (props) => {
  const showMoreBtn =
    props.count > 2 && props.currentlyShown < props.count ? (
      <input
        type='button'
        value='MORE ANSWERED QUESTIONS'
        onClick={props.showMore}
      ></input>
    ) : (
      ''
    );
  return (
    <div>
      {showMoreBtn}
      <input type='button' value='ADD A QUESTION + '></input>
    </div>
  );
};

export default QAButtons;
