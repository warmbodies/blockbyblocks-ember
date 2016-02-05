import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signup() {
      const flash = this.get('flashMessages');

      const success = (data) => {
        flash.success(`Congratulations! You've created a new account!`);
      };

      const error = (error) => {
        flash.danger(`There was a problem creating your new user!`);
      };

      this.get('model').save().then(success, error);
    }
  }
});
