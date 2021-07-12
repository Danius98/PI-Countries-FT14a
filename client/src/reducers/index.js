import { GET_COUNTRIES } from '../actions/index.js'

const initialState = {
    countriesLoaded: []
  };

  function rootReducer(state = initialState, action) {
    if (action.type === GET_COUNTRIES) {
        return {
          ...state,
          countriesLoaded: action.payload
        };
    }
    return state;
  }
  
  export default rootReducer;