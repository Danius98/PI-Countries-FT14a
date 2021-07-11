const initialState = {
    countriesLoaded: []
  };

  function rootReducer(state = initialState, action) {
    if (action.type === "GET_COUNTRIES") {
        return {
          ...state,
          countriesLoaded: action.payload.Search
        };
    }
    return state;
  }
  
  export default rootReducer;