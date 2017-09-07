/* global window document */
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
        return <h1>You should define a render() method for your subclass</h1>;
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
        // and where the services we want to access live, and whether we want to
        // mock things.
        //
        // 1. When running on a developer's machine, using a mock server
        //    we want to use a hard-coded config from
        //
        //       helpers/local-resource-config.js
        //
        // 2. When running on a developer's machine, but we want to use services
        //    on demo, QA or live, we want to get the configuration from the
        //    configuration of the host app.
        //
        // 3. When running on demo, QA or live, the configuration will be injected
        //    based on the host app's configuration, augmented by query parameters.
        //
        // We determine which situation we have by looking at the query parameters
        // and whether there is a pppAppConfig property on the window object.

        const location = window.location;
        const queryParams = location.search;
        const query = queryParams.replace('?', '');
        const params = queryString.parse(query);

        if (/^http:\/\/localhost/.test(location)) {
            // We are running on a developer's machine

            BasicApp.configureForDeveloperMachine(params);
        } else {
            BasicApp.configureForRemoteHost(params);
        }

        const config = window.pppAppConfig;

        if (config) {
            BasicApp.configureUsingAppConfig(config);
        } else {
            BasicApp.configureUsingQueryParams(params);
        }
    }

    static configureForDeveloperMachine(params) {
        const username = params.username;
        const password = params.password;

        const envName = params.env || 'live';

        const env = Resources.initialise(envName, username, password);

        env.authToken = undefined;

        /* eslint-disable no-console */
        if (username && password) {
            console.log(`EntryApp.configureUsingQueryParams() - username = '${username}' password = '${password}'`);

            BasicApp.setCredentials(env, params);
        } else if (env.needsAuthentication) {
            console.log('EntryApp.configureUsingQueryParams() - the query parameters do not include a username' +
                ' and a password.  Perhaps you forgot to pass them in the URL? Alternatively, your application' +
                ' can call Environment.gatherCredentialsWith() somewhere, passing a function that can be used to' +
                ' request the username/password.');
        }
    }

    static configureForRemoteHost(params) {
        const config = window.pppAppConfig;
        const envName = config.env || 'live';

        const env = Resources.initialise(envName);

        env.authToken = config.authToken;
    }

    static getParameter(name, params, config) {
        // Extract the specified parameter from either
        // the query parameters, or the config, with
        // the former taking precedence.

        let value = params[name];

        if (value === undefined && config) {
            value = config[name];
        }

        return value;
    }

    static configureUsingAppConfig(config) {
        const envName = config.env || 'live';
        const env = Resources.initialise(envName);

        env.authToken = config.authToken;
    }

    static configureUsingQueryParams(params) {
        const username = params.username;
        const password = params.password;

        const envName = params.env || 'live';

        const env = Resources.initialise(envName, username, password);

        env.authToken = undefined;

        /* eslint-disable no-console */
        if (username && password) {
            console.log(`EntryApp.configureUsingQueryParams() - username = '${username}' password = '${password}'`);

            BasicApp.setCredentials(env, params);
        } else if (env.needsAuthentication) {
            console.log('EntryApp.configureUsingQueryParams() - the query parameters do not include a username' +
                ' and a password.  Perhaps you forgot to pass them in the URL? Alternatively, your application' +
                ' can call Environment.gatherCredentialsWith() somewhere, passing a function that can be used to' +
                ' request the username/password.');
        }
    }

    static setCredentials(env, params) {
        // We don't have an authentication token.  Hopefully, we have a username and password,
        // which can be used to get one when required.

        const username = params.username;
        const password = params.password;

        if (username && password) {
            env.setCredentials(username, password);
        } else {
            /* eslint: disable-next-line */
            console.warn('EntryApp.constructor() - neither an authToken nor a username/password pair were' +
                ' provided. So, the 3p-resource library will be unable to access resources' +
                ' unless you are calling Environment.bypassAuthentication() somewhere else.');
        }
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
