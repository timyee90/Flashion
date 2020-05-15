import { connect } from 'react-redux';
import App from '../App.jsx';
import { setProductID } from '../actions/appAction.js';

const mapDispatchToProps = (dispatch) => {
  return {
    setProductID: (arg) => {
      dispatch(setProductID(arg));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
