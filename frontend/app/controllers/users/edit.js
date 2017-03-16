import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save() {
            this.get('model').save().then(
                () => this.transitionToRoute('users'),
                (adapterError) => console.error('Cannot save user, errors=' + JSON.stringify(adapterError.errors))
            );
        },

        delete() {
            this.get('model').destroyRecord().then(
                () => this.transitionToRoute('users'),
                () => console.error('Cannot destroy user')
            );
        },

        selectAdmin(admin) {
            let model = this.get('model');
            model.set('admin', admin);
        }
     }
});
