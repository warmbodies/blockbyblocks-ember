import { test } from 'qunit';
import moduleForAcceptance from 'blockbyblocks-ember/tests/helpers/module-for-acceptance';


import loginPage from '../pages/login';
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
  loginPage.visit();

  andThen(function() {
    assert.equal(currentURL(), '/account');
  });
});

test('user can login', function(assert) {
  const userJson = FactoryGuy.build('user').user;
  const session = currentSession(this.application);
  invalidateSession(this.application);
  loginPage.visit();
  loginPage.email(userJson.email);
  loginPage.password(userJson.password);
  loginPage.submit();

  andThen(function() {
    assert.equal(
      flashPage.successMessages(),
      1,
      'Is showing a success flash message'
    );

    assert.equal(
      session.get('isAuthenticated'),
      true,
      "We have signed in after logging in"
    );

    assert.equal(
      currentURL(),
      '/account',
      'We redirected to the newly made account page'
    );

  });
});
