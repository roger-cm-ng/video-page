function basicLocalResourceConfig(common) {
    return {
        local: {
            ...common
        },

        live: {
            ...common,
            'Shared.AuthenticationServicePathUrl': 'http://mzaue2.phoenix.mathletics.com/AuthenticationService-R170/'
        },

        qa: {
            ...common,
            'Shared.AuthenticationServicePathUrl': 'http://qa.phoenix.mathletics.com/AuthenticationService-R170/'
        },

        demo: {
            ...common,
            'Shared.AuthenticationServicePathUrl': 'http://demo.3plearning.com/AuthenticationService/'
        }
    };
}

export default basicLocalResourceConfig;
