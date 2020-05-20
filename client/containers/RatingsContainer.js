import { connect } from 'react-redux';
import Ratings from '../components/RatingsReviews/Ratings.jsx';
import {
  getReviewsMetaData,
  changeRatingFilter,
  clearRatingFilter,
} from '../actions/ratingsAction';

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviews,
    product_id: state.app.product_id,
    averageRating: state.reviews.avg_rating,
    recommendedPercentage: state.reviews.recommendedPercentage,
    reviewsMeta: state.ratings.reviewMetadata,
    ratingsFilter: state.ratings.ratingFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReviewsMetaData: (arg) => {
      dispatch(getReviewsMetaData(arg));
    },
    changeRatingFilter: (arg) => {
      dispatch(changeRatingFilter(arg));
    },
    clearRatingFilter: () => {
      dispatch(clearRatingFilter());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
