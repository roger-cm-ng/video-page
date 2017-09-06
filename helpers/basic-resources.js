import environment from '3p-resource';
import localConfig from './local-resource-config';

class BasicResources {
    static initialise(envName, username, password) {
        const env = environment(envName);

        if (envName === 'local') {
            // This implies we'll be hitting the mock REST server,
            // which does not require authentication.

            env.bypassAuthentication();

            // Set the configuration from our static definitions.

            env.setConfiguration(localConfig[envName]);
        } else {
            // Store the username and password, which may be needed
            // for authentication if no authToken was provided in
            // window.pppAppConfig or the query params.

            env.username = username;
            env.password = password;
        }

        return env;
    }
}

export default BasicResources;
