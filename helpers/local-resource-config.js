// For local development, we can use mock-rest-server (or a similar REST server like json-server)
//
// You should be able to use this code as is, apart from perhaps changing MOCK_SERVICE_PORT to whatever
// port you're using for your mock server.

const MOCK_SERVICES_PORT = 4321; // TODO: 2. DEFINE THE PORT YOUR MOCK SERVER IS LISTENING ON

const MOCK_SERVICES_HOST = 'localhost';
const MOCK_SERVICES_URL = `http://${MOCK_SERVICES_HOST}:${MOCK_SERVICES_PORT}`;


// The app's configuration will have a base URL for each service we use.  For local testing, we define
// the configuration to point to our local server.
//
// For each resource, we have a constant for the base URL, as it would be in production. For example,
// below we have "AvatarAdminBaseUrl" which represents the base of the URL for access to all of
// the Avatar Admin application's resources.  Replace that with the resource(s) your application uses.

const localConfig = {
    BaseName: '',
    AvatarAdminBaseUrl: `${MOCK_SERVICES_URL}/avatar/v1` // TODO: 3. REPLACE THIS WITH YOUR ACTUAL SERVICES
};

export default localConfig;

