import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppCombinedReducers from './app-combined-reducers';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDom.render(
	<Provider store={createStoreWithMiddleware(AppCombinedReducers)}>
		<App />
	</Provider>
	,
	document.querySelector('.js-qa-app')
);
