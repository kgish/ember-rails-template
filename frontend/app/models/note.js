/* global moment: true */
import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
    title: attr('string'),
    contents: attr('string'),
    created_at: attr('date'),
    updated_at: attr('date'),
    user: belongsTo('user', {async: true}),

    created: Ember.computed('created_at', function() {
        return moment(this.get('created_at')).format('ll');
    }),

    updated: Ember.computed('updated_at', function() {
        return moment(this.get('updated_at')).format('ll');
    })
});
