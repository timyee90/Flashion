import { connect } from 'react-redux';
import QASection from '../components/QASection.jsx';

const mapStateToProps = (state) => {
  return {
    entries: state.qa.qaEntries,
  };
};

export default connect(mapStateToProps)(QASection);
