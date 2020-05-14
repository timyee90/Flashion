import { connect } from 'react-redux';
import ProductOverview from '../components/ProductOverview.jsx';
import { getProductData } from '../actions/ProductOverviewActions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    getProductData: (arg) => {
      dispatch(getProductData(arg));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    ProductInfo: state.productInfo.productInfo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductOverview);
