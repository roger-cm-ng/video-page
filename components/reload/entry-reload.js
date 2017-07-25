/* global window document */
import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import environment from '3p-resource';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { handleDefaults } from '../helpers/utils';
import ReloadCombinedReducers from './reload-combined-reducers';
import Reload from './reload';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default class EntryReload {
	constructor(element, dynamicOptions) {
		if (window.pppAppConfig) {
			const config = window.pppAppConfig;
			environment(config.env || 'live')
				.setConfiguration(config);
		}

		const defaults = {};
		this.element = element;
		this.options = handleDefaults(defaults, dynamicOptions);
		this.renderElm();
	}

	renderElm() {
		const store = createStoreWithMiddleware(
			ReloadCombinedReducers,
			window.devToolsExtension ? window.devToolsExtension() : f => f
		);

		ReactDom.render(
			<Provider store={store}>
				<Reload options={this.options} />
			</Provider>,
			document.querySelector(this.element));
		}
}

window.EntryReload = EntryReload;
