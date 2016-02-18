import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    signup() {
      const flash = this.get('flashMessages');
      const e = this.get('model.email');
      const p = this.get('model.password');

      const success = () => {
        flash.success(`Congratulations! You've created a new account!`);
        this.get('session').authenticate('authenticator:devise', e, p)
          .then(() => {
            this.transitionToRoute('account');
          }, () => {
            flash.success(`But... the account you just made won't login :(`);
          });
      };

      const error = () => {
        flash.danger(`There was a problem creating your new user!`);
      };

      this.get('model').save().then(success, error);
    }
  }
});
