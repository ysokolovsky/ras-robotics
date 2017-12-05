export const FETCHING_RESTAURANTS_DATA = 'FETCHING_RESTAURANTS_DATA';
export const FETCHING_RESTAURANTS_DATA_SUCCSESS = 'FETCHING_RESTAURANTS_DATA_SUCCSESS';
export const FETCHING_RESTAURANTS_DATA_FAIL = 'FETCHING_RESTAURANTS_DATA_FAIL';

export const fetchRestaurants = (map, location) => {
  return dispatch => {    
    dispatch({ type: FETCHING_RESTAURANTS_DATA });

    const service = new google.maps.places.PlacesService(map);
    
    return nearbySearch(location, 500, service).then(res => {
      dispatch({ type: FETCHING_RESTAURANTS_DATA_SUCCSESS, payload: res })
    }).catch(err => {
      dispatch({ type: FETCHING_RESTAURANTS_DATA_FAIL, payload: err })
    });
  }
}

function nearbySearch(location, rad, service) {
  var request = {
    location: location,
    radius: rad,
    type: ['restaurant']
  };
  return new Promise(function(resolve,reject){
    service.nearbySearch(request, function(results,status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        resolve(results);
      }else {
        reject(status);
      }
    });
  });
}