export const addToMyList = item => ({
  type: 'ADD_TO_MYLIST',
  item
});

export const removeFromMyList = item => ({
  type: 'REMOVE_FROM_MYLIST',
  id: item.id
});


export const addToRecommendationList = item => ({
  type: 'ADD_TO_RECOMMENDATION_LIST',
  item
});

export const removeFromRecommendationList = item => ({
  type: 'REMOVE_FROM_RECOMMENDATION_LIST',
  id: item.id
});

export const setButtonOnMylist = id => ({
  type: 'SET_BUTTON_ON_MYLIST',
  id
})

export const setButtonOffMylist = id => ({
  type: 'SET_BUTTON_OFF_MYLIST',
  id
})

export const setButtonOnRecommendationList = id => ({
  type: 'ON_MOUSE_ENTER_RECOMMENDATION_LIST',
  id
})

export const setButtonOffRecommendationList = id => ({
  type: 'ON_MOUSE_LEAVE_RECOMMENDATION_LIST',
  id
})




export const initializeMyList = state => ({
  type: 'INITIALIZE_MYLIST',
  state
});

export const initializeRecommendationList = state => ({
  type: 'INITIALIZE_RECOMMENDATION_LIST',
  state
});
