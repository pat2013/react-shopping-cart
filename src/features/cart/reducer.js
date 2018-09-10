const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      const fistMatchIndex = state.indexOf(action.payload);
      return state.filter((item, index) => index !== fistMatchIndex);

    default: return state;
  }
};
export default cartReducer;
