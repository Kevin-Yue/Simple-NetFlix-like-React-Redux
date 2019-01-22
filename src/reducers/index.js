import { combineReducers } from 'redux';
import { mylist } from './mylist';
import { recommendations } from './recommendations';

export default combineReducers({
  mylist,
  recommendations
});
