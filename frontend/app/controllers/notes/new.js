import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save() {
            this.get('model').save().then(
                () => this.transitionToRoute('notes'),
                (adapterError) => console.error('Cannot save note, errors=' + JSON.stringify(adapterError.errors))
            );
        },

        selectUser(user) {
            console.log(user);
        },

        cancel() {
            this.get('model').deleteRecord();
            return true;
        }
    }
});
