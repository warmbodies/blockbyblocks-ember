import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  accessToken: DS.attr('string'),
  gravatarUrl: DS.attr('string'),
  remindViaEmail: DS.attr('boolean'),
  remindViaPhone: DS.attr('boolean')
});
