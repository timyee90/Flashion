import React, { useEffect, useState } from 'react';
import Review from './Review.jsx';
import Select from 'react-select';

const ReviewsSection = (props) => {
  const [moreReviews, loadMoreReviews] = useState(false);
  const [toggleBtnText, changeToggleBtnText] = useState('SHOW MORE REVIEWS');

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
    loadMoreReviewsBtn = <p onClick={handleLoadMoreReviews}>{toggleBtnText}</p>;
  }

  let reviews = !moreReviews ? allReviews.slice(0, 2) : allReviews;

  const handleSelectChange = (e) => {
    props.changeSortCriteriaReview(e.value);
  };

  return (
    <div>
      <div>
        # reviews, sorted by{' '}
        <Select
          options={selectOptions}
          defaultValue={{ value: 'helpful', label: 'Helpful' }}
          onChange={handleSelectChange}
        />
      </div>
      <div>{reviews}</div>
      {loadMoreReviewsBtn}
    </div>
  );
};

export default ReviewsSection;
