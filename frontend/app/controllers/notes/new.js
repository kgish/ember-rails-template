import Ember from 'ember';

export default Ember.Controller.extend({
    users: [],

    actions: {
        save() {
            this.get('model').save().then(
                () => this.transitionToRoute('notes'),
                () => console.error('Cannot create note')
            );
        },

        cancel() {
            this.get('model').deleteRecord();
            return true;
        }
    }
});
