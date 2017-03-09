import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
//import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
    firstname: attr('string'),
    lastname: attr('string'),
    email: attr('string'),
    details: attr('string'),

    fullName: Ember.computed('firstName', 'lastName', function() {
        return `${this.get('firstName')} ${this.get('lastName')}`;
    })
});
