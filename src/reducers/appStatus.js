const appStatusReducer = (state = 'offline', action) => {
  switch(action.type) {
    case 'CHANGE':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default appStatusReducer;