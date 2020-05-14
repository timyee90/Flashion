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
    entries: state.qa.qaEntries,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QASection);
