import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginPage from './components/Dashboard/LoginPage';
import PageNotFoundError from './components/ErrorPages/PageNotFoundError';
import InternalServerError from './components/ErrorPages/InternalServerError';
import * as Sentry from '@sentry/browser';
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const sentry_token = process.env.REACT_APP_SENTRY_DSN;

if (sentry_token) {
  Sentry.init({dsn: sentry_token});
}

const routing = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact={true} path={"/"} component={App} />
        <Route path={"/login"} component={LoginPage} />
        <Route path={"/error/500"} component={InternalServerError} />
        <Route component={PageNotFoundError} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
