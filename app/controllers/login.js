import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    login() {
      const flash = this.get('flashMessages');
      const u = this.get('model.email');
      const p = this.get('model.password');

      this.get('session').authenticate('authenticator:devise', u, p)
        .then( () => {
          flash.success(`Welcome back friend :)`);
          this.transitionToRoute('/account');
        }, () => {
          flash.danger(`I'm afraid that's not correct :-/`);
        });
    }
  }
});
