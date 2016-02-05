import { test } from 'qunit';
import moduleForAcceptance from 'blockbyblocks-ember/tests/helpers/module-for-acceptance';

import signupPage from '../pages/signup';
// import userFactory from '../factories/user';
import FactoryGuy, { make, build } from 'ember-data-factory-guy';

moduleForAcceptance('Acceptance | signup flow');

test('visiting /signup-flow', function(assert) {
  signupPage.visit();

  andThen(function() {
    assert.equal(currentURL(), '/signup');
  });

});

test('creating new signup', function(assert) {
  const userJson = FactoryGuy.build('user').user;

  signupPage.visit();
  signupPage.email(userJson.email);
  signupPage.username(userJson.username);
  signupPage.password(userJson.password);
  signupPage.passwordConfirmation(userJson.password_confirmation);
  signupPage.submit();

  andThen(function() {
    assert.equal(currentURL(), '/account');
  });


});
