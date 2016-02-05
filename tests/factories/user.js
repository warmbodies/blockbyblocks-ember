import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('user', {
  // Put default 'user' attributes in the default section
  // default: {
  //   name: '',
  //   email: '',
  //   password: '',
  //   passwordConfirmation: ''
  // },
  // Create a named 'user' with custom attributes
  default: {
    username: 'One User',
    email: 'one@test.feelsbadman',
    password: 'test1234',
    passwordConfirmation: 'test1234'
  }
});
