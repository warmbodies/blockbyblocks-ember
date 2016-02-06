import { test } from 'qunit';
import moduleForAcceptance from 'blockbyblocks-ember/tests/helpers/module-for-acceptance';

import marketingPage from '../pages/marketing';

import { currentSession, authenticateSession, invalidateSession } from '../../tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | marketing flow');

test('visiting /', function(assert) {
  invalidateSession(this.application);
  marketingPage.visit();

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('visiting / when logged in', function(assert) {
  authenticateSession(this.application);
  marketingPage.visit();
  marketingPage.signupLink();
  andThen(function() {
    assert.equal(currentURL(), '/account');
  });
});
