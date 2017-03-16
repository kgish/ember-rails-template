import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
    model() {
        return RSVP.hash({
            note: this.get('store').createRecord('note'),
            users: this.get('store').findAll('user')
        });
    },

    setupController(controller, model) {
        this._super(controller, model.note);
        controller.setProperties({
            users: model.users
        });
    },

    actions: {
        cancel() {
            this.transitionTo('notes');
        }
    }
});
