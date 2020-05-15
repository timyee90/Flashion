import { connect } from 'react-redux';
import Ratings from '../components/Ratings.jsx';

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviews,
    product_id: state.app.product_id,
    averageRating: state.reviews.avg_rating,
    recommendedPercentage: state.reviews.recommendedPercentage,
  };
};

export default connect(mapStateToProps)(Ratings);
