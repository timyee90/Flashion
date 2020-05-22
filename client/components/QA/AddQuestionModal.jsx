import React, { useState } from 'react';
import EmailValidator from 'email-validator';

const AddQuestionModal = (props) => {
  const [warnings, setWarning] = useState({});
  const [info, setInfo] = useState({
    question: '',
    nickName: '',
    email: '',
  });
  const showHideClassName = props.show
    ? 'modal modal-show'
    : 'modal modal-hide';

  const handleSubmit = () => {
    if (checkIfMandatoryFieldsFilled()) {
      alert('Question has been submitted! Thank you :)');
      props.handleClose();
    } else {
      alert('Please fill out mandatory fields');
    }
  };
  const handleTextChange = (e, field) => {
    setInfo({
      ...info,
      [field]: e.target.value,
    });
  };

  const checkIfMandatoryFieldsFilled = () => {
    let isValid = true;
    if (info.question.length === 0) {
      setWarning((warnings) => {
        return {
          ...warnings,
          question: true,
        };
      });
      isValid = false;
    }
    if (info.nickName.length === 0) {
      setWarning((warnings) => {
        return {
          ...warnings,
          nickName: true,
        };
      });
      isValid = false;
    }
    if (info.email.length === 0 || !EmailValidator.validate(info.email)) {
      setWarning((warnings) => {
        return {
          ...warnings,
          email: true,
        };
      });
      isValid = false;
    }
    return isValid;
  };
  return (
    <div className={showHideClassName}>
      <div className='modal-main'>
        <form>
          <label
            className={
              warnings.nickName ? 'addReviewField warning' : 'addReviewField'
            }>
            <div>Nickname:</div>
            <input
              className='singleline-input'
              type='text'
              value={info.nickName}
              placeholder='Example: jackson11!'
              onChange={(e) => handleTextChange(e, 'nickName')}></input>
          </label>
          <label
            className={
              warnings.question ? 'addReviewField warning' : 'addReviewField'
            }>
            <div>Question:</div>
            <input
              className='singleline-input'
              type='text'
              value={info.question}
              placeholder='Example: What is the texture like?'
              onChange={(e) => handleTextChange(e, 'question')}></input>
          </label>
          <label
            className={
              warnings.email ? 'addReviewField warning' : 'addReviewField'
            }>
            <div>Email:</div>
            <input
              className='singleline-input'
              type='email'
              placeholder='Example: jackson11@email.com'
              value={info.email}
              onChange={(e) => handleTextChange(e, 'email')}></input>
          </label>
        </form>
        <div className='modal-btns'>
          <input
            className='bottom-btn fs32 bold'
            type='button'
            onClick={handleSubmit}
            value='Add Question'></input>
          <button className='bottom-btn fs32 bold' onClick={props.handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionModal;
