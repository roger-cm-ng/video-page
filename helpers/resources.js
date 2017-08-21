import environment from '3p-resource';

const env = environment('demo');

env.bypassAuthentication();

export const coloursResource = env.resource('colours')
                   .baseUrl('http://localhost:4321/avatar/v1')
                   .service('colours/{id}');

