import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
  <div className="dasboard-container">
    <h1>Welcome to the The Rothschild Hotel in Tel Aviv</h1>
    <Link to="/weather">
      <button type="button" className="dash-btn">
        Weather
      </button>
    </Link>
    <Link to="/restaurants">
      <button type="button" className="dash-btn">  
        Restaurants
      </button>
    </Link>
    <Link to="/coupon">
      <button type="button" className="dash-btn">
        Get coupone
      </button>
    </Link>
  </div>
);

export default DashboardPage;