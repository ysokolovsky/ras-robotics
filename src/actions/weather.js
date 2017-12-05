import axios from 'axios';

const API_KEY = '982611975e0d12dbbd814d3dc91dd3bb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCHING_WEATHER_DATA = 'FETCHING_WEATHER_DATA';
export const FETCHING_WEATHER_DATA_SUCCSESS = 'FETCHING_WEATHER_DATA_SUCCSESS';
export const FETCHING_WEATHER_DATA_FAIL = 'FETCHING_WEATHER_DATA_FAIL';

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},il`;
  return dispatch => {
    dispatch({ type: FETCHING_WEATHER_DATA })
    
    return axios.get(url)
      .then(res => {
        dispatch({ type: FETCHING_WEATHER_DATA_SUCCSESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: FETCHING_WEATHER_DATA_FAIL, payload: err.data })
      })
  }
}