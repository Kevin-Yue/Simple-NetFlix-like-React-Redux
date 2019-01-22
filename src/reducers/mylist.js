export const mylist = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_MYLIST':
      const { isOn, ...item } = action.item;
      return state.map(i => i.id).includes(action.item.id)
        ? state
        : [...state, item];

    case 'REMOVE_FROM_MYLIST':
      return state.filter(item => item.id !== action.id);

    case 'SET_BUTTON_ON_MYLIST':
      const index = state.findIndex(ele => ele.id === action.id);
      const clone = state.slice();
      clone[index]['isOn'] = true;
      return clone;

    case 'SET_BUTTON_OFF_MYLIST':
      const index2 = state.findIndex(ele => ele.id === action.id);
      const clone2 = state.slice();
      clone2[index2]['isOn'] = false;
      return clone2;

    case 'INITIALIZE_MYLIST':
      return action.state;

    default:
      return state;
  }
};
