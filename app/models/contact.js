import { match, gte, and, not } from '@ember/object/computed';
import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  headerMessage: 'Comming Soon',

  isValid: match('emailAddress', /^(([A-Za-z0-9]+_+)|([A-Za-z0-9])|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((w)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/),
  isLongEnough: gte("message.length", 5),
  isBothTrue: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothTrue')
});
