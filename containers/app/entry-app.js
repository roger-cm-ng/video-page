/* global window document */
import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import environment from '3p-resource';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import '../../styles/core.scss';
import { handleDefaults } from '../../helpers/utils';
import CombinedReducers from './combined-reducers';
import DeleteMe from '../delete-me/delete-me';


const createStoreWithMiddleware = applyMiddleware(thunk, reduxPromise)(createStore);

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
                <Router>
                    <Route path="/" render={() => <DeleteMe options={this.options} />} />
                </Router>
            </Provider>,
            document.querySelector(this.element));
    }
}

window.EntryApp = EntryApp;
