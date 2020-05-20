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
    <tr key={props.rating} className='ratingRow'>
      <td className='ratingRow-rating'>
        <a style={ratingStyle} value={props.rating} onClick={handleRatingClick}>
          {props.rating} stars
        </a>
      </td>
      <td className='ratingRow-progressbar'>
        <ProgressBar percentage={props.percentage} />
      </td>
      <td className='ratingRow-count'> {props.count} </td>
    </tr>
  );
};

export default RatingRow;
