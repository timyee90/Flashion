import React from "react";
import BarRatingGauge from "./BarRatingGauge.jsx";

const Ratings = (props) => {
  const starRows = ["1", "2", "3", "4", "5"].map((rating) => {
    return (
      <tr>
        <td>
          <a href={"/"}>{rating} stars</a>
        </td>
        <td>{/*add bar showing percent distribution*/}</td>
      </tr>
    );
  });
  return (
    <div>
      <div>Ratings and Review</div>
      <h1>{/*Average rating */}</h1>
      <div>{/*star rating here */}</div>
      <p>{/*enter percent */} of reviews recommend this product</p>
      <table>
        <tbody>{starRows}</tbody>
      </table>
      <BarRatingGauge category="size" />
      <BarRatingGauge category="comfort" />
    </div>
  );
};

export default Ratings;
