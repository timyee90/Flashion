import { connect } from 'react-redux';
import ReviewsSection from '../components/ReviewsSection.jsx';
import { getReviewData } from '../actions/reviewsAction.js';

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviews,
    product_id: state.app.product_id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReviewData: (arg) => {
      dispatch(getReviewData(arg));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsSection);
