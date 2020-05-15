import React, { useEffect } from 'react';
import BarRatingGauge from './BarRatingGauge.jsx';

const Ratings = (props) => {
  const starRows = ['1', '2', '3', '4', '5'].map((rating) => {
    return (
      <tr key={rating}>
        <td>
          <a href={'/'}>{rating} stars</a>
        </td>
        <td>{/*add bar showing percent distribution*/}</td>
      </tr>
    );
  });
  return (
    <div>
      <div>Ratings and Review</div>
      <h1>{props.averageRating}</h1>
      <div>{/*star rating here */}</div>
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
