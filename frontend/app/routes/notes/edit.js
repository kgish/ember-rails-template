import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('note', params.note_id)
    },

    setupController(controller, model) {
        this._super(controller, model);
        let user_id = model.get('user.id');
        this.store.findAll('user').then(
            users => this.controller.setProperties({users: users, currentUser: users.findBy('id', user_id)}),
            error => console.error(error)
        );
    },

    actions: {
        cancel() {
            this.transitionTo('notes');
        }
    }
});
