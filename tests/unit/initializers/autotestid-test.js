import Ember from 'ember';
import AutotestidInitializer from '../../../initializers/autotestid';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | autotestid', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  AutotestidInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
