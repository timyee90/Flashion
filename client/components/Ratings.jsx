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
      <button onClick={handleClear}>CLEAR FILTER</button>
    </div>
  ) : (
    ''
  );
  const changeRatingFilter = (rating) => {
    props.changeRatingFilter(rating);
  };

  const starRows = ['5', '4', '3', '2', '1'].map((rating) => {
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
      <h1>{props.averageRating.toFixed(1)}</h1>
      <div>
        <StarRating rating={props.averageRating} />
      </div>
      <p>{recommendedPerc}% of reviews recommend this product</p>
      <table>
        <tbody>{starRows}</tbody>
      </table>
      {clearFilterBtn}
      <BarRatingGauge category='size' />
      <BarRatingGauge category='comfort' />
    </div>
  );
};

export default Ratings;
