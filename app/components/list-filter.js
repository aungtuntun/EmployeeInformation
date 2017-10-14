import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['list-filter'],
    value: '',
    position:'',
    init() {
        this._super(...arguments);
        this.get('filter')('').then((allResults) => this.set('results', allResults.results));
     //   this.get('position')('').then((posResults) => this.set('results', posResults.results));
    },
    actions: {
        handleFilterEntry() {
            let filterInputValue = this.get('value');
            let filterAction = this.get('filter');
            filterAction(filterInputValue).then((resultsObj) => {
                if(resultsObj.query === this.get('value')) {
                    this.set('results', resultsObj.results);
                }
            });
        },
        handleFilterPosition() {
            let filterInputValue = this.get('position');
            let filterAction = this.get('filter');
            filterAction(filterInputValue).then((resultsData) => {
                if(resultsData.query === this.get('position')){
                    this.set('results',resultsData.results);
                }
            });
        }
    }
});
