import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Router from 'react-router';  
import routes from './routes';

Router.run(routes, function(Handler) {  
    React.render(<Handler />, document.getElementById('app'));
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
