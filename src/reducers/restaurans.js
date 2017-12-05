import { FETCHING_RESTAURANTS_DATA } from '../actions/restaurants';
import { FETCHING_RESTAURANTS_DATA_SUCCSESS } from '../actions/restaurants';
import { FETCHING_RESTAURANTS_DATA_FAIL } from '../actions/restaurants';


const initialState = {
  isFetching: false,
  data: null,
  hasError: false,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_RESTAURANTS_DATA:
      return {
        ...state,
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null
      };
    case FETCHING_RESTAURANTS_DATA_SUCCSESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null
      };
    case FETCHING_RESTAURANTS_DATA_FAIL:
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