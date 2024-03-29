const initialState = {
  category: null,
  sortBy: {
    type: 'popular',
    order: 'desk',
  },
};

const filters = (state = initialState, action) => {
  // action = {
  //   type: 'SET_SORT_BY',
  //   payload: 'price'
  // }
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state, // We take all the old data from the state
      sortBy: action.payload, // Replacement
    };
  }
  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state; // If there are no changes, then we return the old values
};

export default filters;
