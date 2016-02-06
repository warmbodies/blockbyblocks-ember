import { test } from 'qunit';
import moduleForAcceptance from 'blockbyblocks-ember/tests/helpers/module-for-acceptance';

import signupPage from '../pages/signup';
import flashPage from '../pages/flash';
import FactoryGuy from 'ember-data-factory-guy';

import { currentSession, authenticateSession, invalidateSession } from '../../tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | signup flow');

test('visiting /signup-flow', function(assert) {
  invalidateSession(this.application);
  signupPage.visit();

  andThen(function() {
    assert.equal(currentURL(), '/signup');
  });

});

test('if yer signed in, sinput redirects to account', function(assert) {
  authenticateSession(this.application);
  signupPage.visit();

  andThen(function() {
    assert.equal(
      currentURL(),
      '/account',
      'We redirect to the account page if we\'re already logged in'
    );
  });
});

test('creating new signup', function(assert) {
  const userJson = FactoryGuy.build('user').user;
  const session = currentSession(this.application);

  signupPage.visit();
  signupPage.email(userJson.email);
  signupPage.username(userJson.username);
  signupPage.password(userJson.password);
  signupPage.passwordConfirmation(userJson.password_confirmation);
  signupPage.submit();

  andThen(function() {

    assert.equal(
      flashPage.successMessages(),
      1,
      'Is showing a success flash message'
    );

    assert.equal(
      session.get('isAuthenticated'),
      true,
      "We have signed in after creating user"
    );

    assert.equal(
      currentURL(),
      '/account',
      'We redirected to the newly made account page'
    );

    // TODO: Would be nice to test if we signed in as the right user
  });


});
