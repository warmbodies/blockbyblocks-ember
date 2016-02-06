import PageObject from 'blockbyblocks-ember/tests/page-object';

let {
  visitable,
  clickable
} = PageObject;

export default PageObject.create({
  visit: visitable('/'),
  signupLink: clickable('[data-test-id=signupLink]')
});
