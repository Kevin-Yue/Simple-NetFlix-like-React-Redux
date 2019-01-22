export const recommendations = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_RECOMMENDATION_LIST':
      const { isOn, ...item } = action.item;
      return state.map(i => i.id).includes(action.item.id)
        ? state
        : [...state, item];

    case 'REMOVE_FROM_RECOMMENDATION_LIST':
      return state.filter(item => item.id !== action.id);

    case 'ON_MOUSE_ENTER_RECOMMENDATION_LIST':
      const index = state.findIndex(ele => ele.id === action.id);
      const clone = state.slice();
      clone[index]['isOn'] = true;
      return clone;

    case 'ON_MOUSE_LEAVE_RECOMMENDATION_LIST':
      const index2 = state.findIndex(ele => ele.id === action.id);
      const clone2 = state.slice();
      clone2[index2]['isOn'] = false;
      return clone2;

    case 'INITIALIZE_RECOMMENDATION_LIST':
      return action.state;

    default:
      return state;
  }
};
