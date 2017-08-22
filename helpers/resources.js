import environment from '3p-resource';
import localConfig from './local-resource-config';

// The Resources class provides a set of static fields, one for each resource
// needed by the application. Users should call its initialise() method, to set
// up the environment and create all of the resources the application will use.

class Resources {
    // Initialise the environment and resources, based on the provided
    // environment name.  We return the environment so the caller has
    // access to everything, in particular the authToken if one was
    // passed in the query parameters.

    static initialise(envName, username, password) {
        return Resources.initialiseEnvironmentAndResources(envName, username, password);
    }

    // createResources() should create a static field for each resource:
    //
    //    const env = Resources.env;
    //
    //    Resources.colours = env.resource('Colours')
    //                           .baseUrl('@AvatarAdminBaseUrl')
    //                           .service('colours');
    //
    //
    // Application code can then access those resources like so:
    //
    //    const allColours = Resource.colours.get().send();

    static createResources() {
        const env = Resources.env;

        // TODO: ADD STATIC PROPERTIES FOR EACH OF YOUR RESOURCES
        //
        // You should replace this placeholder resource with the ones you
        // actually need in your application.

        Resources.albums = env.resource('Albums')
            .baseUrl('http://jsonplaceholder.typicode.com')
            .service('albums');
    }


    // Implementation details. There should be no need to modify this code.

    static initialiseEnvironmentAndResources(envName, username, password) {
        Resources.env = environment(envName);

        Resources.configureEnvironment(username, password);
        Resources.createResources();

        return Resources.env;
    }

    static configureEnvironment(username, password) {
        const env = Resources.env;
        const envName = env.name;

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
    }
}

export default Resources;

