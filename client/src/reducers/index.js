import { 
GET_COUNTRIES ,
GET_COUNTRIES_NAME,
GET_COUNTRY_ID,
SHOW_ACTIVITY,
NAME_ORDER_A,
NAME_ORDER_Z,
CONTINENT,
POP_ORDER_MAX,
POP_ORDER_MIN
} from '../actions/index.js';

const Name_Order = (a, b) => {
  if(a.nombre < b.nombre) return -1
  if(a.nombre > b.nombre) return 1
  return 0
}

const Pop_Order = (a, b) => {
  return a.poblacion - b.poblacion
}

const initialState = {
    countriesLoaded: [],
    countryInfo: []
  };

  function rootReducer(state = initialState, action) {
    if (action.type === GET_COUNTRIES) {
        return {
          ...state,
          countriesLoaded: action.payload
        };
    }
    if (action.type === GET_COUNTRIES_NAME) {
      return {
        ...state,
        countriesLoaded: action.payload
      };
    }
    if (action.type === GET_COUNTRY_ID) {
      return {
        ...state,
        countryInfo: action.payload
      };
    }
    if (action.type === SHOW_ACTIVITY) {
      return {
        ...state,
        countriesLoaded: state.countriesLoaded.filter((c) => {
          return c.Activity.some((a) => a.nombre === action.payload)
        })
      }
    }
    if (action.type === NAME_ORDER_A) {
      return {
        ...state,
        countriesLoaded: state.countriesLoaded.slice().sort(Name_Order)
      }
    }
    if (action.type === NAME_ORDER_Z) {
      return {
        ...state,
        countriesLoaded: state.countriesLoaded.slice().sort(Name_Order).reverse()
      }
    }
    if (action.type === CONTINENT) {
      return {
        ...state,
        countriesLoaded: state.countriesLoaded.filter((c) => c.continente === action.payload)
      }
    }
    if (action.type === POP_ORDER_MAX) {
      return {
        ...state,
        countriesLoaded: state.countriesLoaded.slice().sort(Pop_Order)
      }
    }
    if (action.type === POP_ORDER_MIN) {
      return {
        ...state,
        countriesLoaded: state.countriesLoaded.slice().sort(Pop_Order).reverse()
      }
    }
  return state;
  }
  
  export default rootReducer;