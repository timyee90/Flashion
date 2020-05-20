import React, { useState } from 'react';
import StarRating from './StarRating.jsx';
import { characteristicsChart } from '../../../utils/computations';

const AddReviewModal = (props) => {
  const [rating, setRating] = useState(null);
  const [recommended, setRecommended] = useState(null);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [reviewInfo, setReviewInfo] = useState({
    summary: '',
    body: '',
    nickName: '',
    email: '',
  });
  const [char, setChar] = useState({
    size: null,
    width: null,
    comfort: null,
    quality: null,
    length: null,
    fit: null,
  });

  const [warning, setWarning] = useState([]);
  const showHideClassName = props.show
    ? 'modal modal-show'
    : 'modal modal-hide';
  const ratingDescription = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  };
  const checkIfMandatoryFieldsFilled = () => {
    for (let key in char) {
      if (!char[key]) {
        return false;
      }
    }
    if (
      !rating ||
      !recommended ||
      reviewInfo.body.length === 0 ||
      reviewInfo.nickName.length === 0 ||
      reviewInfo.email.length === 0
    ) {
      return false;
    }
    return true;
  };
  const handleTextChange = (e, field) => {
    setReviewInfo({
      ...reviewInfo,
      [field]: e.target.value,
    });
  };
  const handleSubmit = () => {
    console.log(checkIfMandatoryFieldsFilled());
  };
  const changeRating = (rating) => {
    setRating(rating);
  };
  const setRecommendation = (e) => {
    if (e.target.value === 'yes') {
      setRecommended(true);
    } else if (e.target.value === 'no') {
      setRecommended(false);
    }
  };

  const handleCharacteristics = (e, newChar) => {
    setChar({
      ...char,
      [newChar]: e.target.value,
    });
  };

  const characteristics = [
    'size',
    'width',
    'comfort',
    'quality',
    'length',
    'fit',
  ].map((el) => {
    return (
      <tr>
        <tr>
          <td></td>
          {[1, 2, 3, 4, 5].map((index) => {
            return <td>{characteristicsChart[el][index]}</td>;
          })}
        </tr>
        <tr>
          <td>{el} </td>
          {['1', '2', '3', '4', '5'].map((value) => {
            return (
              <td>
                <label>
                  {value}
                  <input
                    name={el}
                    type='radio'
                    value={value}
                    onChange={(e) => handleCharacteristics(e, el)}></input>
                </label>
              </td>
            );
          })}
        </tr>
      </tr>
    );
  });

  return (
    <aside tag='aside' role='dialog'>
      <div className={showHideClassName}>
        <div className='modal-main'>
          <p>{warning}</p>
          <form>
            <StarRating rating={rating} onChange={changeRating} />{' '}
            <p>{ratingDescription[rating]}</p>
            <label>
              Do you recommend this product?
              <label>
                <input
                  name='recommend'
                  type='radio'
                  value='yes'
                  onChange={setRecommendation}></input>
                Yes
              </label>
              <label>
                <input
                  name='recommend'
                  type='radio'
                  value='no'
                  onChange={setRecommendation}></input>
                No
              </label>
            </label>
            <div className='addReviewField'>
              Characteristics:
              <table className='characteristics'>
                <tbody>{characteristics}</tbody>
              </table>
            </div>
            <label className='addReviewField'>
              Review Summary:
              <input
                type='text'
                value={reviewInfo.summary}
                onChange={(e) => handleTextChange(e, 'summary')}></input>
            </label>
            <label className='addReviewField'>
              Review Body:
              <input
                type='text'
                value={reviewInfo.body}
                onChange={(e) => handleTextChange(e, 'body')}></input>
            </label>
            <label className='addReviewField'>
              Nickname:
              <input
                type='text'
                value={reviewInfo.nickName}
                onChange={(e) => handleTextChange(e, 'nickName')}></input>
            </label>
            <label className='addReviewField'>
              Email:
              <input
                type='email'
                value={reviewInfo.email}
                onChange={(e) => handleTextChange(e, 'email')}></input>
            </label>
            <input
              type='button'
              onClick={handleSubmit}
              value='Add Review'></input>
          </form>
          <button onClick={props.handleClose}>Close</button>
        </div>
      </div>
    </aside>
  );
};

export default AddReviewModal;
