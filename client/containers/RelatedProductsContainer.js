import { connect } from 'react-redux';
import RelatedProductsList from '../components/RelatedProductsComponents/RelatedProductsList.jsx';
import {
  getRelatedProductIds,
  getCurrentProductInfo,
} from '../actions/relatedProductActions.js';
import { setProductID } from '../actions/appAction.js';

const mapStateToProps = (state) => {
  return {
    relatedProducts: state.relatedProducts,
    currentProductInfo: state.currentProductInfo,
    product_id: state.app.product_id,
  };
};

const mapDisPatchToProps = (dispatch) => {
  return {
    getRelatedProductIds: (arg) => {
      dispatch(getRelatedProductIds(arg));
    },
    getCurrentProductInfo: (arg) => {
      dispatch(getCurrentProductInfo(arg));
    },
    setProductID: (arg) => {
      dispatch(setProductID(arg));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(RelatedProductsList);
