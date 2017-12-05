import { FETCHING_WEATHER_DATA } from '../actions/weather';
import { FETCHING_WEATHER_DATA_SUCCSESS } from '../actions/weather';
import { FETCHING_WEATHER_DATA_FAIL } from '../actions/weather';


const initialState = {
  isFetching: false,
  data: null,
  hasError: false,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_WEATHER_DATA:
      return {
        ...state,
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null
      };
    case FETCHING_WEATHER_DATA_SUCCSESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null
      };
    case FETCHING_WEATHER_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        data: null,
        hasError: true,
        errorMessage: action.payload
      };
  }
  
  return state;
}