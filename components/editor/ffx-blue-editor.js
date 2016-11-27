import React from 'react';
import ReactDom from 'react-dom';
import { handleDefaults } from '../helpers/utils';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import EditorCombinedReducers from './editor-combined-reducers';
import Editor from './editor';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default class FfxBlueEditor {
  constructor(element, dynamicOptions) {
    const defaults = {};
		this.element = element;
		this.options = handleDefaults(defaults, dynamicOptions);
		this.renderElm();
  }

	renderElm() {
    const store = createStoreWithMiddleware(
      EditorCombinedReducers,
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
		ReactDom.render(
			<Provider store={store}>
				<Editor options={this.options} />
			</Provider>
			,
			document.querySelector(this.element)
    );
	}
}

window.FfxBlueEditor = FfxBlueEditor;
