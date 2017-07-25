/* global window document */
import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import environment from '3p-resource';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { handleDefaults } from '../../helpers/utils';
import CombinedReducers from './combined-reducers';
import DeleteMe from '../delete-me/delete-me';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default class EntryApp {
	constructor(element, dynamicOptions) {
		if (window.pppAppConfig) {
			const config = window.pppAppConfig;
			environment(config.env || 'live')
				.setConfiguration(config);
		}

		const defaults = {};
		this.element = element;
		this.options = handleDefaults(defaults, dynamicOptions);
		this.renderElement();
	}

	renderElement() {
		const store = createStoreWithMiddleware(
			CombinedReducers,
			window.devToolsExtension ? window.devToolsExtension() : f => f
		);

		ReactDom.render(
			<Provider store={store}>
				<DeleteMe options={this.options} />
			</Provider>,
			document.querySelector(this.element));
		}
}

window.EntryApp = EntryApp;
