import { connect } from 'react-redux';
import RelatedProductsList from '../components/RelatedProductsList.jsx';
import { getRelatedProductIds } from '../actions/relatedProductActions.js';

const mapStateToProps = (state) => {
  return {
    relatedProducts: state.relatedProducts,
  };
};

const mapDisPatchToProps = (dispatch) => {
  return {
    getRelatedProductIds: (arg) => {
      dispatch(getRelatedProductIds(arg));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(RelatedProductsList);
