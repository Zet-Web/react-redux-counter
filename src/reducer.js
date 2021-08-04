const reducer = (state = 15, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RAND':
      return state + action.payload;
    default:
      return state;
  }
};
export default reducer;
