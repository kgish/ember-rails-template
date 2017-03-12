import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save() {
        this.get('model').save().then(
            () => this.transitionToRoute('notes'),
            () => console.error('Cannot save note')
        );
        },
        delete() {
            this.get('model').destroyRecord().then(
                () => this.transitionToRoute('notes'),
                () => console.error('Cannot destroy note')
            );
        }
     }
});
