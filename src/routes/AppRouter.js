import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import DashboardPage from './../components/DashboardPage';
import WeatherForecastPage from './../components/WeatherForecastPage';
import RestaurantsPage from './../components/RestaurantsPage';
import CouponPage from './../components/CouponPage';
import NotFoundPage from './../components/NotFoundPage';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route path="/weather" component={WeatherForecastPage} />
        <Route path="/coupon" component={CouponPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;