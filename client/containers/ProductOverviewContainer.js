import { connect } from 'react-redux';
import ProductOverview from '../components/ProductOverviewComponents/ProductOverview.jsx';
import {
  getProductData,
  getStylesData,
} from '../actions/ProductOverviewActions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    getProductData: (arg) => {
      dispatch(getProductData(arg));
      dispatch(getStylesData(arg));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    productInfo: state.productInfo.productInfo,
    productId: state.app.product_id,
    stylesInfo: state.productInfo.stylesInfo,
    averageRating: state.reviews.avg_rating,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductOverview);
