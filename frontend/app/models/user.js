/* global moment: true */
import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
    firstname: attr('string'),
    lastname: attr('string'),
    email: attr('string'),
    description: attr('string'),
    created_at: attr('date'),
    notes: hasMany('note'),

    fullName: Ember.computed('firstName', 'lastName', function() {
        return `${this.get('firstName')} ${this.get('lastName')}`;
    }),

    created: Ember.computed('created_at', function() {
        return moment(this.get('created_at')).format('ll');
    })
});
