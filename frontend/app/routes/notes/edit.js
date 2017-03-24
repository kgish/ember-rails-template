import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
    model(params) {
        return RSVP.hash({
            note: this.store.findRecord('note', params.note_id),
            users: this.store.findAll('user'),
        });
    },

    setupController(controller, models) {
        this._super(controller, models.note);
        controller.setProperties({
            users: models.users
        });
    },

    actions: {
        cancel() {
            this.transitionTo('notes');
        }
    }
});
