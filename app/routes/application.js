import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
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
