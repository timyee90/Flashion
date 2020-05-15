import { connect } from 'react-redux';
import OutfitList from '../components/OutfitList.jsx';

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};
// mapDispatchToProps

export default connect(mapStateToProps)(OutfitList);
