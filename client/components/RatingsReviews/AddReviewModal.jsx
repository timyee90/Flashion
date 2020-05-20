import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import EmailValidator from 'email-validator';
import StarRating from './StarRating.jsx';
import CharacteristicsForm from './CharacteristicsForm.jsx';
import { addReview } from '../../../utils/queries';

const AddReviewModal = (props) => {
  const [rating, setRating] = useState(null);
  const [pictures, addPicture] = useState([]);
  const [recommended, setRecommended] = useState(null);
  const [reviewInfo, setReviewInfo] = useState({
    summary: '',
    body: '',
    nickName: '',
    email: '',
  });
  const [warnings, setWarning] = useState({});

  const [char, setChar] = useState({
    size: null,
    width: null,
    comfort: null,
    quality: null,
    length: null,
    fit: null,
  });

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
    let isValid = true;
    for (let key in char) {
      if (!char[key]) {
        setWarning((warnings) => {
          return {
            ...warnings,
            [key]: true,
          };
        });
        isValid = false;
      }
    }
    if (!rating) {
      setWarning((warnings) => {
        return {
          ...warnings,
          rating: true,
        };
      });
      isValid = false;
    }
    if (!recommended) {
      setWarning((warnings) => {
        return {
          ...warnings,
          recommended: true,
        };
      });
      isValid = false;
    }
    if (reviewInfo.body.length < 50) {
      setWarning((warnings) => {
        return {
          ...warnings,
          body: true,
        };
      });
      isValid = false;
    }
    if (reviewInfo.nickName.length === 0) {
      setWarning((warnings) => {
        return {
          ...warnings,
          nickName: true,
        };
      });
      isValid = false;
    }
    if (reviewInfo.email.length === 0 || !EmailValidator(review.email)) {
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

  const handleTextChange = (e, field) => {
    setReviewInfo({
      ...reviewInfo,
      [field]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (checkIfMandatoryFieldsFilled()) {
      alert('Review has been submitted');
      addReview(props.product_id, {
        rating: rating,
        summary: reviewInfo.summary,
        body: reviewInfo.body,
        recommend: recommended,
        name: reviewInfo.nickName,
        photos: pictures,
        email: reviewInfo.email,
        characteristics: {
          size: {
            value: char.size,
          },
          width: {
            value: char.width,
          },
          comfort: {
            value: char.comfort,
          },
          quality: {
            value: char.quality,
          },
          length: {
            value: char.length,
          },
          fit: {
            value: char.fit,
          },
        },
      });
      props.handleClose();
    } else {
      alert('Please fill out mandatory fields');
    }
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

  const handlePictureUpload = (picture) => {
    addPicture((prev) => {
      return [...prev, picture];
    });
  };

  const handleCharacteristics = (e, newChar) => {
    setChar({
      ...char,
      [newChar]: e.target.value,
    });
  };

  return (
    <aside tag='aside' role='dialog'>
      <div className={showHideClassName}>
        <div className='modal-main'>
          <div className='bold modalTitle'>Write Your Review</div>
          <div className='bold modalSubtitle'>About the product</div>
          <form>
            <label className='addReviewField'>
              <div>Review Summary:</div>
              <input
                type='text'
                value={reviewInfo.summary}
                placeholder='Example: Best purchase ever!'
                onChange={(e) => handleTextChange(e, 'summary')}></input>
            </label>
            <div className={warnings.rating ? 'warning' : ''}>
              <div>Your rating: </div>
              <StarRating rating={rating} onChange={changeRating} />{' '}
              <p>{ratingDescription[rating]}</p>
            </div>
            <label
              className={
                warnings.body
                  ? 'addReviewField warning body'
                  : 'addReviewField body'
              }>
              <div>Review Body:</div>
              <input
                className='textInput body'
                type='text'
                value={reviewInfo.body}
                placeholder='Why did you like the product or not'
                onChange={(e) => handleTextChange(e, 'body')}></input>
            </label>
            <label className={warnings.recommended ? 'warning' : ''}>
              <div>Do you recommend this product?</div>
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
                <tbody>
                  <CharacteristicsForm
                    handleCharacteristics={handleCharacteristics}
                    warnings={warnings}
                  />
                </tbody>
              </table>
            </div>

            <label
              className={
                warnings.nickName ? 'addReviewField warning' : 'addReviewField'
              }>
              <div>Nickname:</div>
              <input
                type='text'
                value={reviewInfo.nickName}
                placeholder='Example: jackson11!'
                onChange={(e) => handleTextChange(e, 'nickName')}></input>
            </label>
            <label
              className={
                warnings.email ? 'addReviewField warning' : 'addReviewField'
              }>
              <div>Email:</div>
              <input
                type='email'
                placeholder='Example: jackson11@email.com'
                value={reviewInfo.email}
                onChange={(e) => handleTextChange(e, 'email')}></input>
            </label>
            <ImageUploader
              withIcon={true}
              withPreview={true}
              buttonText='Choose images'
              onChange={handlePictureUpload}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
            />
            <input
              className='btn fs32 bold'
              type='button'
              onClick={handleSubmit}
              value='Add Review'></input>
          </form>
          <button className='btn fs32 bold' onClick={props.handleClose}>
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AddReviewModal;
