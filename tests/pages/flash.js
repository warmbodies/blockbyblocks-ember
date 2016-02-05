import PageObject from 'blockbyblocks-ember/tests/page-object';

let {
  count
} = PageObject;

export default PageObject.create({
  successMessages: count('.alert.alert-success'),
  warningMessages: count('.alert.alert-warning'),
  infoMessages: count('.alert.alert-info'),
  dangerMessages: count('.alert.alert-danger'),
});
