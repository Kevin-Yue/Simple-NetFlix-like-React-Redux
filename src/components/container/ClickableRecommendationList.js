import {
  addToMyList,
  setButtonOffRecommendationList,
  setButtonOnRecommendationList,
  removeFromRecommendationList
} from '../../actions';
import { connect } from 'react-redux';
import { List } from '../presentational/List';
import ReactTooltip from 'react-tooltip'

const mapStateToProps = state => ({
  items: state.recommendations,
  isAdded: false
});

const mapDispatchToProps = dispatch => ({
  onButtonClick: item => {
    dispatch(addToMyList(item));
    dispatch(removeFromRecommendationList(item));
    ReactTooltip.hide();
  },
  onMouseOver: id => dispatch(setButtonOnRecommendationList(id)),
  onMouseLeave: id => dispatch(setButtonOffRecommendationList(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
