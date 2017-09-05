import BasicResources from './basic-resources';

// The Resources class provides a set of static fields, one for each resource
// needed by the application. Users should call its initialise() method, to set
// up the environment and create all of the resources the application will use.

class Resources {
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
            .service('albums')
            .profile();
    }


    // Initialise the environment and resources, based on the provided
    // environment name.  We return the environment so the caller has
    // access to everything, in particular the authToken if one was
    // passed in the query parameters.

    static initialise(envName, username, password) {
        Resources.env = BasicResources.initialise(envName, username, password);

        Resources.createResources();

        return Resources.env;
    }
}

export default Resources;

