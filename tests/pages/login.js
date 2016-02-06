import PageObject from 'blockbyblocks-ember/tests/page-object';

let {
  visitable,
  clickable,
  fillable
} = PageObject;

export default PageObject.create({
  visit: visitable('/login'),
  email: fillable('[data-test-id=input__email]'),
  password: fillable('[data-test-id=input__password]'),
  submit: clickable('[data-test-id=loginButton]')
});
