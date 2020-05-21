import React from 'react';

const AddQuestionModal = (props) => {
  const showHideClassName = props.show
    ? 'modal modal-show'
    : 'modal modal-hide';

  return (
    <div className={showHideClassName}>
      <div className='modal-main'></div>
    </div>
  );
};

export default AddQuestionModal;
