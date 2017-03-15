import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save() {
            this.get('model').save().then(
                () => this.transitionToRoute('users'),
                () => console.error('Cannot save user')
            );
        },

        cancel() {
            this.get('model').deleteRecord();
            return true;
        },

        selectAdmin(admin) {
            console.log('Selected admin='+admin)
        }
    }
});
