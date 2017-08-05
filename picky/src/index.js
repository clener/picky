import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Product from './Components/Product'
import registerServiceWorker from './registerServiceWorker';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="product" component={Product} />
    </Route>
  </Router>, 
  document.getElementById('root'));
registerServiceWorker();
