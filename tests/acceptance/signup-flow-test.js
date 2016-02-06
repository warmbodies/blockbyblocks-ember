import { test } from 'qunit';
import moduleForAcceptance from 'blockbyblocks-ember/tests/helpers/module-for-acceptance';

import signupPage from '../pages/signup';
import flashPage from '../pages/flash';
// import userFactory from '../factories/user';
import FactoryGuy, { make, build } from 'ember-data-factory-guy';

import { currentSession, authenticateSession, invalidateSession } from '../../tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | signup flow');

test('visiting /signup-flow', function(assert) {
  signupPage.visit();

  andThen(function() {
    assert.equal(currentURL(), '/signup');
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
    pauseTest();
    const test = session.get('isAuthenticated');
    assert.equal(
      currentURL(),
      '/account',
      'We redirected to the newly made account page'
    );

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


    // TODO: Would be nice to test if we signed in as the right user
  });


});
