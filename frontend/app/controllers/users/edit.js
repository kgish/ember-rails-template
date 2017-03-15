import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save() {
            this.get('model').save().then(
                () => this.transitionToRoute('users'),
                () => console.error('Cannot save user')
            );
        },

        delete() {
            this.get('model').destroyRecord().then(
                () => this.transitionToRoute('users'),
                () => console.error('Cannot destroy user')
            );
        },

        selectAdmin(admin) {
            console.log('Selected admin='+admin)
        }
     }
});
