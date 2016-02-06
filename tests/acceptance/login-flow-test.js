import { test } from 'qunit';
import moduleForAcceptance from 'blockbyblocks-ember/tests/helpers/module-for-acceptance';


import accountPage from '../pages/account';
import flashPage from '../pages/flash';
import FactoryGuy from 'ember-data-factory-guy';

import { currentSession, authenticateSession, invalidateSession } from '../../tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | login flow');

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('visiting /login when logged in redirects', function(assert) {
  authenticateSession(this.application);
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/account');
  });
});
