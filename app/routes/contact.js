import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.store.createRecord('contact');
    },

    actions: {
        send(newContactMessage) {
            newContactMessage.save().then(() => this.controller.set('responseMessage', 'Your message was sent!'));
            this.controller.set('model.email', '');
            this.controller.set('model.message', '');
          },

        willTransition() {
            this.controller.get('model').rollbackAttributes();
        }
    }
});
