import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './containers/AppContainer.js';
import './styles.scss';
import store from './store.js';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

var mountNode = document.getElementById('app');

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path='/product/:id'>
        <Provider store={store}>
          <App />
        </Provider>
      </Route>
      <Redirect from='/' to='/product/1' />
    </Switch>
  </HashRouter>,
  mountNode
);
