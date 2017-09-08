/* global window document */
/* eslint-disable no-console */

import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import queryString from 'querystring';
import { createStore, applyMiddleware } from 'redux';

import { handleDefaults } from '../../helpers/utils';
import CombinedReducers from './combined-reducers';
import Resources from '../../helpers/resources';


const createStoreWithMiddleware = applyMiddleware(thunk, reduxPromise)(createStore);

export default class BasicApp {
    constructor(element, dynamicOptions) {
        BasicApp.installHistoryHandler();
        BasicApp.configure();

        this.element = element;
        this.options = handleDefaults({}, dynamicOptions);

        this.renderElement();
    }

    render() {
        return <h1>You should define a render() method for your subclass of BasicApp</h1>;
    }


    // Implementation details.  You should not need to change any code past this point.

    renderElement() {
        const store = createStoreWithMiddleware(
            CombinedReducers,
            window.devToolsExtension ? window.devToolsExtension() : f => f
        );

        ReactDom.render(
            this.render(store),
            document.querySelector(this.element)
        );
    }

    static configure() {
        // How we want to configure things depends on where this app is running,
        // and where the services we want to access live.
        //
        // 1. When running on a developer's machine, using a mock server we want
        //    to use a hard-coded config from
        //
        //       helpers/local-resource-config.js
        //
        // 2. When running on a developer's machine, but we want to use back-end
        //    services on demo, QA or live, we want to get the configuration from
        //    the configuration of the host app.
        //
        // 3. When running on demo, QA or live, the configuration will be injected
        //    based on the host app's configuration, but can be overridden by query
        //    parameters.
        //
        // We determine which situation we have by looking at the window location
        // URL and the query parameters, and whether there is a pppAppConfig property
        // on the window object.

        const location = window.location;
        const runningOnDeveloperMachine = /^https?:\/\/localhost/.test(location);
        const queryParams = location.search;
        const query = queryParams.replace('?', '');
        const params = queryString.parse(query);

        if (runningOnDeveloperMachine) {
            BasicApp.configureForDeveloperMachine(params);
        } else {
            BasicApp.configureForRemoteHost(params);
        }
    }

    static configureForDeveloperMachine(params) {
        let envName = params.env;

        if (!envName) {
            console.log('BasicApp.configureForDeveloperMachine() - you did not provide an "env" query' +
                            ' parameter, so I am assuming you want to talk to live.');

            envName = 'live';
        }

        const credentials = BasicApp.getCredentials(params);

        if (envName === 'local' || BasicApp.weHaveUsableCredentials(credentials)) {
            Resources.initialise(envName, credentials);
        }
    }

    static configureForRemoteHost(params) {
        const config = window.pppAppConfig;
        const envName = config.env || 'live';
        const credentials = BasicApp.getCredentials(params);

        if (!config.BaseName) {
            console.log('BasicApp.configureForRemoteHost() - your pppAppConfig does not' +
                        ' include a BaseName item; we will assume it should be blank.');

            config.BaseName = '';
        }

        if (BasicApp.weHaveUsableCredentials(credentials)) {
            Resources.initialise(envName, credentials);
        }
    }

    static getCredentials(params) {
        const credentials = {};
        const config = window.pppAppConfig;
        const items = ['authToken', 'username', 'password'];

        for (const item of items) {
            let value = params[item];

            if (value === undefined) {
                if (config) {
                    value = config[item];
                }
            }

            credentials[item] = value;
        }

        return credentials;
    }

    static weHaveUsableCredentials(credentials) {
        let usableCredentials = false;

        if (credentials.authToken) {
            usableCredentials = true;
        } else if (credentials.username && credentials.password) {
            usableCredentials = true;
        }

        if (!usableCredentials) {
            console.error('EntryApp.configureForDeveloperMachine() - to execute, we need either an authToken or' +
                ' a username/password pair.  After combining data from window.pppAppConfig and the query' +
                ' parameters, I still do not have what I need. The app will probably not function correctly if' +
                ' it requires any 3P resources.');
        }

        return usableCredentials;
    }

    static installHistoryHandler() {
        // We want to ensure that we don't lose the query parameters like
        // username and password as the user navigates through the app. This
        // is important so that during development, we can refresh the browser
        //
        // To avoid this, we monkey-patch window.pushState() to append
        // them if they are not there.

        const queryParams = window.location.search;
        const pushState = window.history.pushState;

        window.history.pushState = (...args) => {
            if (args[2].indexOf(queryParams) < 0) {
                args[2] += queryParams;
            }

            return pushState.apply(this, args);
        };
    }
}
