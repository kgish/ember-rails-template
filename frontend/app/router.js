import Ember from 'ember';
import config from 'frontend/config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('users', function() {
        this.route('new');
        this.route('edit', {
            path: ':user_id/edit'
        });
        this.route('show', {
            path: ':user_id/show'
        });
    });
    this.route('notes', function() {
        this.route('new');
        this.route('edit', {
            path: ':note_id/edit'
        });
        this.route('show', {
            path: ':note_id/show'
        });
    });
});

export default Router;
