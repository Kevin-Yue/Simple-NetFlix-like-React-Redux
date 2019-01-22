import {
  removeFromMyList,
  addToRecommendationList,
  setButtonOffMylist,
  setButtonOnMylist
} from '../../actions';
import { connect } from 'react-redux';
import { List } from '../presentational/List';
import ReactTooltip from 'react-tooltip'

const mapStateToProps = state => ({
  items: state.mylist,
  isAdded: true
});

const mapDispatchToProps = dispatch => ({
  onButtonClick: item => {
    dispatch(removeFromMyList(item));
    dispatch(addToRecommendationList(item));
    ReactTooltip.hide();
  },
  onMouseOver: id => dispatch(setButtonOnMylist(id)),
  onMouseLeave: id => dispatch(setButtonOffMylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
