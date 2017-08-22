/* global window document */
import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import queryString from 'querystring';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Route, browserHistory as history} from 'react-router-dom';

import {handleDefaults} from '../../helpers/utils';
import CombinedReducers from './combined-reducers';
import DeleteMe from '../delete-me/delete-me';
import Resources from '../../helpers/resources';

const createStoreWithMiddleware = applyMiddleware(thunk, reduxPromise)(createStore);

// When executing on demo, QA, or production, the host app will inject a property
// called pppAppConfig into the global window variable.  This will provide the
// base name of the app.  Most of the time that will be an empty string, but in
// case it is not, we will extract it and pass it to the router, below.

const appConfig = window.pppAppConfig;
const BASE_NAME = appConfig ? appConfig.BaseName : '';

export default class EntryApp {
    constructor(element, dynamicOptions) {
        EntryApp.installHistoryHandler();
        EntryApp.configure();

        this.element = element;
        this.options = handleDefaults({}, dynamicOptions);

        this.renderElement();
    }

    render(store) {
        // TODO: DEFINE THE TOP-LEVEL ROUTES FOR YOUR APPLICATION'S COMPONENTS HERE

        // NOTE: We have used a "render" attribute, rather than "component" to specify what
        //       should be rendered.  This allows us to pass options to the component. You
        //       can obviously simplify things if your components don't need any.

        return (
            <Provider store={store}>
                <Router history={history} basename={BASE_NAME}>
                    <Route exact path="/" render={() => <DeleteMe options={this.options}/>}/>
                </Router>
            </Provider>
        );
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
        const queryParams = window.location.search;
        const query = queryParams.replace('?', '');
        const params = queryString.parse(query);
        const config = window.pppAppConfig;

        if (config) {
            EntryApp.configureUsingAppConfig(config);
        } else {
            EntryApp.configureUsingQueryParams(params);
        }
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

        if (username && password) {
            console.log(`EntryApp.configureUsingQueryParams() - username = '${username}' password = '${password}'`);

            EntryApp.setCredentials(env, params);
        } else {
            if (env.needsAuthentication) {
                console.log('EntryApp.configureUsingQueryParams() - the query parameters do not include a username' +
                    ' and a password.  Perhaps you forgot to pass them in the URL? Alternatively, your application can' +
                    ' call Environment.gatherCredentialsWith() somewhere, passing a function that can be used to' +
                    ' request the username/password.');
            }
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
            console.warn('EntryApp.constructor() - neither an authToken nor a username/password pair were' +
                ' provided. So, the 3p-resource library will be unable to access resources' +
                ' unless you are calling Environment.bypassAuthentication() somewhere else.');
        }
    }

    static installHistoryHandler() {
        // We want to ensure that we don't lose the query parameters like
        // username and password as the user navigates through the app,
        //
        // To avoid this, we monkey-patch window.pushState() to append
        // them if they are not there.

        const queryParams = window.location.search;
        const pushState = window.history.pushState;

        window.history.pushState = function (...args) {
            if (args[2].indexOf(queryParams) < 0) {
                args[2] += queryParams;
            }

            return pushState.apply(this, args);
        };
    }
}

window.EntryApp = EntryApp;
