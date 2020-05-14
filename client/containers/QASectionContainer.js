import { connect } from 'react-redux';
import QASection from '../components/QASection.jsx';
import { getQAData } from '../actions/qaAction.js';

const mapDispatchToProps = (dispatch) => {
  return {
    getQAData: (arg) => {
      dispatch(getQAData(arg));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    product_id: state.app.product_id,
    entries: state.qa.qaEntries,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QASection);
