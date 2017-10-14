import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        filterByName(param) {
            if(param !== '') {
                return this.get('store').query('employee', {name: param}).then((filterResults) => {
                    return {query: param, results: filterResults};
                });
            }else {
                return this.get('store').findAll('employee').then((results) => {
                    return {query: param, results: results};
                })
            }
        },
        filterByPosition(param) {
            if(param !== '') {
                return this.get('store').query('employee', {position: param}).then((filterResults) => {
                    return {query: param, results: filterResults};
                });
            }else {
                return this.get('store').findAll('employee').then((results) => {
                    return {query:param, results: results};
                });
            }
        }
    }
});
