import { connect } from 'react-redux';
import Ratings from '../components/Ratings.jsx';
import { getReviewsMetaData } from '../actions/ratingsAction';

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviews,
    product_id: state.app.product_id,
    averageRating: state.reviews.avg_rating,
    recommendedPercentage: state.reviews.recommendedPercentage,
    reviewsMeta: state.ratings.reviewMetadata,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReviewsMetaData: (arg) => {
      dispatch(getReviewsMetaData(arg));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
