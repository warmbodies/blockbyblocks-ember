import PageObject from 'blockbyblocks-ember/tests/page-object';

let {
  visitable
} = PageObject;

export default PageObject.create({
  visit: visitable('/')
});
