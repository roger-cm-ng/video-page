import express from 'express';
import React from 'react';
import App from '../../components/app/app';
import AppCombinedReducers from '../../components/app/app-combined-reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import ReactDomServer from 'react-dom/server';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(AppCombinedReducers);
const Index = express.Router();

Index.get('/', (req, res) => {
  const reduxState = escape(JSON.stringify(store.getState()));
  const appElm = ReactDomServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  res.render('index', { appElm, reduxState });
});
export default Index;
