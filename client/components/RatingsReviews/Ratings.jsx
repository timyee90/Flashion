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
    } else {
      toggleClearFilterBtn(false);
    }
  }, [props.ratingsFilter]);

  const handleClear = (e) => {
    props.clearRatingFilter();
    toggleClearFilterBtn(false);
  };
  const clearFilterBtn = showClearFilterBtn ? (
    <div>
      <button className='bottom-btn bold' onClick={handleClear}>
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
        key={rating}
        rating={rating}
        value={rating}
        changeRatingFilter={changeRatingFilter}
        percentage={ratingPercentage}
        count={count}
        filters={props.ratingsFilter}
      />
    );
  });
  const characteristics = props.characteristics;
  const recommendedPerc = props.recommendedPercentage
    ? props.recommendedPercentage.toFixed(1)
    : 0;
  const barRatingGauges = Object.keys(props.characteristics).map(
    (characteristic) => {
      return (
        <div>
          <BarRatingGauge
            category={characteristic}
            value={props.characteristics[characteristic].value}
          />
        </div>
      );
    }
  );
  return (
    <div>
      <div className='ratingDisplay'>
        <div className='avg-rating bold'>{props.averageRating.toFixed(1)}</div>
        <div className='avg-rating-star'>
          <StarRating rating={props.averageRating} />
        </div>
      </div>
      <p>{recommendedPerc}% of reviews recommend this product</p>
      <table className='ratingRows'>
        <tbody>{starRows}</tbody>
      </table>
      {clearFilterBtn}
      {barRatingGauges}
    </div>
  );
};

export default Ratings;
