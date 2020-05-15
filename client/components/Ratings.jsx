import React, { useEffect } from 'react';
import BarRatingGauge from './BarRatingGauge.jsx';
import StarRating from './StarRating.jsx';
import ProgressBar from './ProgressBar.jsx';

const Ratings = (props) => {
  const starRows = ['1', '2', '3', '4', '5'].map((rating) => {
    return (
      <tr key={rating}>
        <td>
          <a href={'/'}>{rating} stars</a>
          <ProgressBar percentage={50} />
        </td>
        <td>{/*add bar showing percent distribution*/}</td>
      </tr>
    );
  });
  return (
    <div>
      <div>Ratings and Review</div>
      <h1>{props.averageRating}</h1>
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
