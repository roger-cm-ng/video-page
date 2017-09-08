/* eslint-disable no-console */

import environment from '3p-resource';
import localConfig from './local-resource-config';

class BasicResources {
    static initialise(envName, credentials) {
        const env = environment(envName);
        const location = window.location;
        const runningOnDeveloperMachine = /^https?:\/\/localhost/.test(location);

        if (runningOnDeveloperMachine) {
            if (envName === 'local') {
                // This implies we'll be hitting the mock REST server,
                // which does not require authentication.

                env.bypassAuthentication();
            } else if (credentials.authToken) {
                env.authToken = credentials.authToken;
            } else {
                env.setCredentials(credentials.username, credentials.password);
            }

            // Set the configuration from our static definitions.

            env.setConfiguration(localConfig[envName]);
        } else if (credentials.authToken) {
            env.authToken = credentials.authToken;
        } else if (credentials.username && credentials.password) {
            env.username = credentials.username;
            env.password = credentials.password;
        } else {
            // The caller should have provided a valid set of credentials, so
            // hopefully this will never happen.

            console.log('BasicResources.initialise() - to execute, we need either an authToken or' +
                ' a username/password pair.  The credentials object that was provided does not' +
                ' contain either.  So, expect things to fail badly :-(.');
        }

        return env;
    }
}

export default BasicResources;
