import { combineReducers } from 'redux';
import WeatherReducer from './weather';
import RestaurantsReducer from './restaurans';

export default combineReducers({
    weather: WeatherReducer,
    restaurants: RestaurantsReducer
});