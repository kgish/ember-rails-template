import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save() {
        this.get('model').save().then(
            () => this.transitionToRoute('users'),
            () => console.error('model did not save')
        );
        },
        delete() {
            this.get('model').destroyRecord().then(
                () => this.transitionToRoute('users'),
                () => console.error('model did not destroy')
            );
        }
     }
});
