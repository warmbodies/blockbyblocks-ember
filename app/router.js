import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('marketing', { path: '/' });
  this.route('signup');
  this.route('login');
  this.route('forgot-password');
  this.route('reset-password');
  this.route('account');
});

export default Router;
