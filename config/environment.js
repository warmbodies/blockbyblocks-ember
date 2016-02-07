/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'blockbyblocks-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    API: {
      namespace: 'api/v1'
    }
  };

  if (environment === 'development') {
    ENV.API.host = 'http://localhost:3002';

    ENV.contentSecurityPolicy = {
      'default-src': "'self'",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' localhost:35729 0.0.0.0:35729",
      'media-src': "'self'"
    };

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    ENV['simple-auth'] = {
      store: 'simple-auth-session-store:ephemeral'
    }

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['ember-simple-auth'] = {
    routeAfterAuthentication: 'account',
    routeIfAlreadyAuthenticated: 'account',
  }

  ENV['simple-auth-devise'] = {
    serverTokenEndpoint: `${ENV.API.host}/${ENV.API.namespace}/login`
  }


  return ENV;
};
