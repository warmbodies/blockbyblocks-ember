import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  model() {
    if (this.get('session.isAuthenticated')) {
      return this.store.findAll('currentUser').then(function(user) {
        this.get('currentUser').load(user);
      }, function(error) {
        Ember.Logger.warn(error);
      });
    } else {
      this._super(...arguments);
    }
  },

  actions: {
    sessionAuthenticated() {
      this.refresh(); // Refresh model after logging in
      this._super(...arguments);
    }
  }
});
