import { connect } from 'react-redux';
import OutfitList from '../components/RelatedProductsComponents/OutfitList.jsx';
import { setProductID } from '../actions/appAction.js';

const mapStateToProps = (state) => {
  return {
    product_id: state.app.product_id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProductID: (arg) => {
      dispatch(setProductID(arg));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutfitList);
