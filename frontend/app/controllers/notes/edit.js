import Ember from 'ember';

export default Ember.Controller.extend({

    users: null,
    currentUser: null,

    actions: {

        activate() {
            console.log('activate');
        },

        save() {
            this.get('model').save().then(
                () => this.transitionToRoute('notes'),
                (adapterError) => console.error('Cannot save note, errors=' + JSON.stringify(adapterError.errors))
            );
        },

        delete() {
            this.get('model').destroyRecord().then(
                () => this.transitionToRoute('notes'),
                () => console.error('Cannot destroy note')
            );
        },

        selectUser(user) {
            this.set('currentUser', user);
        }
     }
});
