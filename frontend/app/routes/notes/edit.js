import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
    model(params) {
        // return this.store.findRecord('note', params.note_id);
    //     console.log(params);
         return RSVP.hash({
              note: this.store.findRecord('note', params.note_id),
    //          users: this.get('store').findAll('user')
         });
    },
    //
    setupController(controller, models) {
        this._super(controller, models.note);
    //     controller.setProperties({
    //         note: models.note,
    //         users: models.users
    //     });
    },

    actions: {
        cancel() {
            this.transitionTo('notes');
        }
    }
});
