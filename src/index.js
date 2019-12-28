import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginPage from './components/Dashboard/LoginPage';
import PageNotFoundError from './components/ErrorPages/PageNotFoundError';
import InternalServerError from './components/ErrorPages/InternalServerError';
import TestPage from "./components/TestPage";
import CodeOfConductPage from './components/CodeOfConductPage';
import * as Sentry from '@sentry/browser';
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const sentry_token = process.env.REACT_APP_SENTRY_DSN;
const safeURL = window.location.host !== 'www.isohack.in' && window.location.host !== 'localhost:3000' && window.location.host !== 'isohack.herokuapp.com';


if (sentry_token) {
  Sentry.init({dsn: sentry_token});
}

const routing_unsafe = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route
          path='/'
          render={(props) => <InternalServerError {...props} safeURL={safeURL} />}
        />
      </Switch>
    </Router>
  </Provider>
);

const routing_safe = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact={true} path={"/"} component={App} />
        <Route path={"/login"} component={LoginPage} />
        <Route path={"/test"} component={TestPage} />
		<Route path={"/code-of-conduct/"} component={CodeOfConductPage} />
        <Route path={"/error/500"} component={InternalServerError} />
        <Route component={PageNotFoundError} />
      </Switch>
    </Router>
  </Provider>
);

if (safeURL) {
  ReactDOM.render(routing_unsafe, document.getElementById('root'));
  serviceWorker.unregister();
} else {
  ReactDOM.render(routing_safe, document.getElementById('root'));
  serviceWorker.unregister();
}
