import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './store/reducers/authReducer';
import protfolioReducer from './store/reducers/protfolioReducer';
import transactionsReducer from './store/reducers/transactionsReducer';

import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../src/assets/jss/xTraderTheme'
import App from './App';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  protfolio: protfolioReducer,
  transactions: transactionsReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter >
          <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
document.getElementById('root'));
