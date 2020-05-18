import React, { useEffect } from 'react';
import BarRatingGauge from './BarRatingGauge.jsx';
import StarRating from './StarRating.jsx';
import ProgressBar from './ProgressBar.jsx';

const Ratings = (props) => {
  const ratingStyle = {
    cursor: 'pointer',
    textDecorationLine: 'underLine',
  };
  useEffect(() => {
    props.getReviewsMetaData(props.product_id);
  }, [props.product_id]);

  const addFilter = (e) => {
    e.preventDefault();
    let ratingClicked = e.target.getAttribute('value');
    const newClass = e.target.className === '' ? 'clickedRating' : '';
    console.log(newClass);
    e.target.className = newClass;
    props.changeRatingFilter(ratingClicked);
  };

  const starRows = ['5', '4', '3', '2', '1'].map((rating) => {
    const ratingPercentage = props.reviewsMeta
      ? props.reviewsMeta[rating].percent
      : 0;

    const count = props.reviewsMeta ? props.reviewsMeta[rating].count : 0;

    return (
      <tr key={rating} id={rating}>
        <td>
          <a style={ratingStyle} value={rating} onClick={addFilter}>
            {rating} stars
          </a>
        </td>
        <td>
          <ProgressBar percentage={ratingPercentage} />
        </td>
        <td> {count} </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>{props.averageRating.toFixed(1)}</h1>
      <div>
        <StarRating rating={props.averageRating} />
      </div>
      <p>{props.recommendedPercentage}% of reviews recommend this product</p>
      <table>
        <tbody>{starRows}</tbody>
      </table>
      <BarRatingGauge category='size' />
      <BarRatingGauge category='comfort' />
    </div>
  );
};

export default Ratings;
