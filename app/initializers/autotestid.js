import Ember from 'ember';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  Ember.TextField.reopen({
    attributeBindings: ['data-test-id']
  });
}

export default {
  name: 'autotestid',
  initialize
};
