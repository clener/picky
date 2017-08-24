import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EntryScreen from './Components/Pages/EntryScreen';
import Products from './Components/Pages/Products'
import registerServiceWorker from './registerServiceWorker';
import { IndexRoute, Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={EntryScreen} />
      <Route path="/products" component={Products} />
    </div>
  </BrowserRouter>, 
  document.getElementById('root'));
registerServiceWorker();
