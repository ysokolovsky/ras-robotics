import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/restaurants';
import Header from './../components/Header';


class RestaurantsPage extends Component {
  componentDidMount() {
    const LOCATION = {lat: 32.0673124, lng: 34.7781004}; // The Rothschild Hotel
    const map = new google.maps.Map(this.refs.map, {
      center: LOCATION,
      zoom: 17
    });

    this.props.fetchRestaurants(map, LOCATION);
  }

  renderRestaurantsList(restaurants) {
    return restaurants.map(restaurant => {
      return (
        <div key={restaurant.name} className="restaurants-list-item">
          {restaurant.photos && <img src={restaurant.photos[0].getUrl({maxWidth: 350, maxHeight: 250})} />}
          <strong>{restaurant.name}</strong>
          <span>{restaurant.vicinity}</span>
        </div>
      ) 
    })
  }

  render() {
    return (
      <div className="restaurants-container">
        <Header />
        <h3>List of restaurants near the Rothschild Hotel</h3>
        { this.props.restaurants.data && <div className="restaurants-list">{this.renderRestaurantsList(this.props.restaurants.data)}</div> }
        <div id="map" ref="map"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps, { fetchRestaurants })(RestaurantsPage);