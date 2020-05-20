import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Review from './Review.jsx';
import AddReviewModal from './AddReviewModal.jsx';
import StarRatingModule from 'react-star-ratings';

const ReviewsSection = (props) => {
  const [moreReviews, loadMoreReviews] = useState(false);
  const [toggleBtnText, changeToggleBtnText] = useState('SHOW MORE REVIEWS');
  const [modalVisibility, setModalVisibility] = useState(false);

  let loadMoreReviewsBtn = '';
  let filteredReviews = props.reviews;
  const selectOptions = [
    { value: 'helpful', label: 'Helpful' },
    { value: 'newest', label: 'Newest' },
    { value: 'relevant', label: 'Relevant' },
  ];
  useEffect(() => {
    props.getReviewData(props.product_id, props.sorting, props.ratingSort);
  }, [props.product_id, props.sorting, props.ratingSort]);

  const handleLoadMoreReviews = () => {
    loadMoreReviews(!moreReviews);
    let text = moreReviews ? 'SHOW MORE REVIEWS' : 'HIDE REVIEWS';
    changeToggleBtnText(text);
  };

  const allReviews = filteredReviews.map((review, index) => {
    return <Review key={index} review={review} />;
  });

  if (allReviews.length > 2) {
    loadMoreReviewsBtn = (
      <button className='btn bold fs32' onClick={handleLoadMoreReviews}>
        {toggleBtnText}
      </button>
    );
  }

  let reviews = !moreReviews ? allReviews.slice(0, 2) : allReviews;

  const handleSelectChange = (e) => {
    props.changeSortCriteriaReview(e.value);
  };

  const showModal = () => {
    setModalVisibility(true);
  };
  const hideModal = () => {
    setModalVisibility(false);
  };

  return (
    <div>
      <div className='fs32 bold'>
        {props.count} reviews, sorted by{' '}
        <Select
          options={selectOptions}
          defaultValue={{ value: 'helpful', label: 'Helpful' }}
          onChange={handleSelectChange}
        />
      </div>
      <div>{reviews}</div>
      <div className='reviewsBtnRow'>
        {loadMoreReviewsBtn}
        <button className='btn bold fs32' onClick={showModal}>
          ADD A REVIEW +{' '}
        </button>
      </div>
      <AddReviewModal
        handleClose={hideModal}
        show={modalVisibility}
        product_id={props.product_id}
      />
    </div>
  );
};

export default ReviewsSection;
