import Ember from 'ember';

export default Ember.Service.extend({
  load(model) {
    this.set('model', model);
  }
});
