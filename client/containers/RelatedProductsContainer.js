import { connect } from 'react-redux';
import RelatedProductsList from '../components/RelatedProductsList.jsx';
import { getRelatedProductIds } from '../actions/relatedProductActions.js';
import { setProductID } from '../actions/appAction.js';

const mapStateToProps = (state) => {
  return {
    relatedProducts: state.relatedProducts,
    product_id: state.app.product_id,
  };
};

const mapDisPatchToProps = (dispatch) => {
  return {
    getRelatedProductIds: (arg) => {
      dispatch(getRelatedProductIds(arg));
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
