import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginPage from './components/Dashboard/LoginPage';
import PageNotFound from './components/PageNotFound';
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const routing = (
  <Provider store={store}>
    <Router>
        <Switch>
            <Route exact={true} path={"/"} component={App} />
            <Route path={"/login"} component={LoginPage} />
            <Route component={PageNotFound} />
        </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
