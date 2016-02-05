import PageObject from 'blockbyblocks-ember/tests/page-object';

let {
  visitable,
  fillable,
  clickable
} = PageObject;

export default PageObject.create({
  visit: visitable('/signup'),
  email: fillable('[data-test-id=input__email]'),
  username: fillable('[data-test-id=input__username]'),
  password: fillable('[data-test-id=input__password]'),
  passwordConfirmation: fillable('[data-test-id=input__passwordConfirmation]'),
  submit: fillable('[data-test-id=signupButton]')


});
