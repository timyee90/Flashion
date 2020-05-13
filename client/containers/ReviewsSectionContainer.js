import { connect } from 'react-redux';
import ReviewsSection from '../components/Review.jsx';

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.entries,
  };
};

export default connect(mapStateToProps)(ReviewsSection);
