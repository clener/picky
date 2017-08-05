import React from 'react';
import Router from 'react-router';

const DefaultRoute = Router.DefaultRoute;  
const Route = Router.Route;  

var routes = (  
  <Route name="ourApp" path="/" handler={require('./App.js')}>
    <DefaultRoute handler={require('./App.js')} />
    <Route name="products" handler={require('./Components/Product.js')} />
  </Route>
)