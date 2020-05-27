import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Review from './Review.jsx';
import AddReviewModal from './AddReviewModal.jsx';

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
    let text = moreReviews ? 'SHOW MORE REVIEWS' : 'SHOW LESS REVIEWS';
    changeToggleBtnText(text);
  };

  const allReviews = filteredReviews.map((review, index) => {
    return <Review key={index} review={review} />;
  });

  if (allReviews.length > 2) {
    loadMoreReviewsBtn = (
      <button className='bottom-btn bold fs32' onClick={handleLoadMoreReviews}>
        {toggleBtnText}
      </button>
    );
  }

  let reviews = !moreReviews ? allReviews.slice(0, 2) : allReviews;
  const noCountDiv =
    reviews.length === 0 ? (
      <div className='noCount'>
        <div className='fs32 bold'> No reviews can be matched :(</div>
      </div>
    ) : null;
  const handleSelectChange = (e) => {
    props.changeSortCriteriaReview(e.value);
  };

  const showModal = () => {
    setModalVisibility(true);
  };
  const hideModal = () => {
    setModalVisibility(false);
  };
  const productName = props.product_name ? props.product_name : '';
  return (
    <div>
      <div className='fs32 bold'>
        {allReviews.length} reviews, sorted by{' '}
        <Select
          options={selectOptions}
          defaultValue={{ value: 'helpful', label: 'Helpful' }}
          onChange={handleSelectChange}
        />
      </div>
      <div>{reviews}</div>
      {noCountDiv}
      <div className='reviewsBtnRow'>
        {loadMoreReviewsBtn}
        <button className='bottom-btn bold fs32' onClick={showModal}>
          ADD A REVIEW +{' '}
        </button>
      </div>
      <AddReviewModal
        handleClose={hideModal}
        show={modalVisibility}
        product_id={props.product_id}
        product_name={productName}
      />
    </div>
  );
};

export default ReviewsSection;
