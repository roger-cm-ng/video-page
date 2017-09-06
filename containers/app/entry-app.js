/* global window */

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, hashHistory as history, Switch } from 'react-router-dom';

import BasicApp from './basic-app';
import DeleteMe from '../delete-me/delete-me';


export default class EntryApp extends BasicApp {
    render(store) {
        // TODO: DEFINE THE TOP-LEVEL ROUTES FOR YOUR APPLICATION'S COMPONENTS HERE
        Raven.captureMessage('Initialised');

        // When executing on demo, QA, or production, the host app will inject a property
        // called pppAppConfig into the global window variable.  This will provide the
        // base name of the app.  Most of the time that will be an empty string, but in
        // case it is not, we will extract it and pass it to the router, below.

        const appConfig = window.pppAppConfig;
        const BASE_NAME = appConfig ? appConfig.BaseName : '';


        // NOTE: We have used a "render" attribute, rather than "component" to specify what
        //       should be rendered.  This allows us to pass options to the component. You
        //       can obviously simplify things if your components don't need any.

        return (
            <Provider store={store}>
                <Router history={history} basename={BASE_NAME}>
                    <Switch>
                        <Route exact path="/" render={() => <h1>Whoo hoo!</h1>} />
                        <Route exact path="/delete-me" render={() => <DeleteMe options={this.options} />} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

window.EntryApp = EntryApp;
