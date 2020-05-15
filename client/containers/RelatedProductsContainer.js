import { connect } from 'react-redux';
import RelatedProductsList from '../components/RelatedProductsList.jsx';
import {
  getRelatedProductIds,
  getProductStyles,
} from '../actions/relatedProductActions.js';

const mapStateToProps = (state) => {
  return {
    relatedProducts: state.relatedProducts,
    productStyles: state.productStyles,
    product_id: state.app.product_id,
  };
};

const mapDisPatchToProps = (dispatch) => {
  return {
    getRelatedProductIds: (arg) => {
      dispatch(getRelatedProductIds(arg));
    },
    getProductStyles: (arg) => {
      dispatch(getProductStyles(arg));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(RelatedProductsList);
