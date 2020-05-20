import React, { useState } from 'react';
import ProgressBar from './ProgressBar.jsx';

const RatingRow = (props) => {
  const [isClicked, toggleClick] = useState(false);

  const ratingStyle = {
    cursor: 'pointer',
    textDecorationLine: 'underLine',
  };

  const handleRatingClick = (e) => {
    let ratingClicked = e.target.getAttribute('value');
    props.changeRatingFilter(ratingClicked);
  };

  return (
    <tr key={props.rating}>
      <td>
        <a style={ratingStyle} value={props.rating} onClick={handleRatingClick}>
          {props.rating} stars
        </a>
      </td>
      <td>
        <ProgressBar percentage={props.percentage} />
      </td>
      <td> {props.count} </td>
    </tr>
  );
};

export default RatingRow;
