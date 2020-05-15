import { connect } from 'react-redux';
import ProductOverview from '../components/ProductOverview.jsx';
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
    product_id: state.app.product_id,
    stylesInfo: state.productInfo.stylesInfo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductOverview);
