import React, { useEffect, useState } from 'react';
import Review from './Review.jsx';

const ReviewsSection = (props) => {
  useEffect(() => {
    props.getReviewData(props.product_id);
  }, [props.product_id]);

  const [moreReviews, loadMoreReviews] = useState(false);
  const [toggleBtnText, changeToggleBtnText] = useState('SHOW MORE REVIEWS');

  let loadMoreReviewsBtn = '';

  const handleLoadMoreReviews = () => {
    loadMoreReviews(!moreReviews);
    let text = moreReviews ? 'SHOW MORE REVIEWS' : 'HIDE REVIEWS';
    changeToggleBtnText(text);
  };

  const allReviews = props.reviews.map((review, index) => {
    return <Review key={index} review={review} />;
  });
  if (allReviews.length > 2) {
    loadMoreReviewsBtn = <p onClick={handleLoadMoreReviews}>{toggleBtnText}</p>;
  }

  let reviews = !moreReviews ? allReviews.slice(0, 2) : allReviews;

  return (
    <div>
      <div>{reviews}</div>
      {loadMoreReviewsBtn}
    </div>
  );
};

export default ReviewsSection;
