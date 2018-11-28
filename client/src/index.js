import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './store/reducers/authReducer';

import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../src/assets/jss/xTraderTheme'
import App from './App';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App/>
    </Provider>
  </MuiThemeProvider>,
document.getElementById('root'));
