import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    signup() {
      const flash = this.get('flashMessages');
      const u = this.get('model.username');
      const p = this.get('model.password');

      const success = (data) => {
        flash.success(`Congratulations! You've created a new account!`);
        this.get('session').authenticate('authenticator:devise', u, p)
          .then(() => {
            // this.transitionToRoute('account');
            // automatic transition
          }, () => {
            flash.success(`But... the account you just made won't login :(`);
          });
      };

      const error = (error) => {
        flash.danger(`There was a problem creating your new user!`);
      };

      this.get('model').save().then(success, error);
    }
  }
});
