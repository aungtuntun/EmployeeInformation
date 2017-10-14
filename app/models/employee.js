import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    title: DS.attr(),
    owner: DS.attr(),
    position: DS.attr(),
    department: DS.attr(),    
    city: DS.attr(),
    salary: DS.attr()
});
