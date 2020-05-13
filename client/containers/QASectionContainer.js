import { connect } from 'react-redux';
import QASection from '../components/QASection.jsx';

const mapStateToProps = (state) => {
  return {
    entries: state.qa.entries,
  };
};

export default connect(mapStateToProps)(QASection);
