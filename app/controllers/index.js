import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
    responseMessage: '',
    emailAddress: '',

    isValid: match('emailAddress', /^(([A-Za-z0-9]+_+)|([A-Za-z0-9])|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((w)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/),
    isDisabled: not('isValid'),

    actions: {

        saveInvitation() {
            const email = this.get('emailAddress');

            const newInvitation = this.store.createRecord('invitation', { email });

            newInvitation.save().then(response => {
                this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
                this.set('emailAddress', '');
            });

        }
    }
});
