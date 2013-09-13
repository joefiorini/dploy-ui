import Resolver from 'resolver';
import router from 'appkit/router';
import Adapter from 'appkit/adapters/application';
import config from 'appkit/config';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver,
  Router: Ember.Router.extend({
    router: router
  })
});

Adapter.reopen({
  host: config.host
});

App.ApplicationAdapter = Adapter;

export default App;
