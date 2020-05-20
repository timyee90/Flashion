import React, { useEffect, useState } from 'react';
import BarRatingGauge from './BarRatingGauge.jsx';
import StarRating from './StarRating.jsx';
import RatingRow from './RatingRow.jsx';

const Ratings = (props) => {
  const [showClearFilterBtn, toggleClearFilterBtn] = useState(false);

  useEffect(() => {
    props.getReviewsMetaData(props.product_id);
  }, [props.product_id]);

  useEffect(() => {
    if (props.ratingsFilter.length > 0) {
      toggleClearFilterBtn(true);
    }
  }, [props.ratingsFilter]);

  const handleClear = (e) => {
    console.log('clear');
    props.clearRatingFilter();
    toggleClearFilterBtn(false);
  };
  const clearFilterBtn = showClearFilterBtn ? (
    <div>
      <button className='btn' onClick={handleClear}>
        CLEAR FILTER
      </button>
    </div>
  ) : (
    ''
  );
  const changeRatingFilter = (rating) => {
    props.changeRatingFilter(rating);
  };

  const starRows = ['5', '4', '3', '2', '1'].map((rating, id) => {
    let ratingPercentage = props.reviewsMeta
      ? props.reviewsMeta[rating].percent
      : 0;

    let count = props.reviewsMeta ? props.reviewsMeta[rating].count : 0;
    if (!count && !ratingPercentage) {
      count = 0;
      ratingPercentage = 0;
    }
    return (
      <RatingRow
<<<<<<< HEAD:client/components/Ratings.jsx
        key={id}
=======
        key={rating}
>>>>>>> 5add541a742b5eb656256b8ab7999c9676751483:client/components/RatingsReviews/Ratings.jsx
        rating={rating}
        value={rating}
        changeRatingFilter={changeRatingFilter}
        percentage={ratingPercentage}
        count={count}
      />
    );
  });
  const recommendedPerc = props.recommendedPercentage
    ? props.recommendedPercentage.toFixed(1)
    : 0;
  return (
    <div>
      <div className='ratingDisplay'>
        <div className='avg-rating'>{props.averageRating.toFixed(1)}</div>
        <div className='avg-rating-star'>
          <StarRating rating={props.averageRating} />
        </div>
      </div>
      <p>{recommendedPerc}% of reviews recommend this product</p>
      <table className='ratingRows'>
        <tbody>{starRows}</tbody>
      </table>
      {clearFilterBtn}
      <BarRatingGauge category='size' />
      <BarRatingGauge category='comfort' />
    </div>
  );
};

export default Ratings;
