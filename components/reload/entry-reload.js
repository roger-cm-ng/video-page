import React from 'react';
import ReactDom from 'react-dom';
import { handleDefaults } from '../helpers/utils';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReloadCombinedReducers from './reload-combined-reducers';
import Reload from './reload';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default class EntryReload {
  constructor(element, dynamicOptions) {
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
			</Provider>
			,
			document.querySelector(this.element));
    }
}

window.EntryReload = EntryReload;
