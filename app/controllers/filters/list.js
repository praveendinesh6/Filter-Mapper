import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service('notify'),

  listHeaders: [{
    key: 'Filter Name',
    value: 'description',
    width: "40%;"
  },{
    key: 'Action',
    width: "60%;"
  },{
    width: "7%"
  }],

  actions: {
    editFilter(filter) {
      this.transitionToRoute('filters.edit', filter.id);
    },
    goToDetails(filter) {
      this.transitionToRoute('filters.details', filter.id);
    },
    removeFilter(filter) {
      this.get('store').destroyRecord('/filters', filter).then(() => {
        this.get('notify').success('Filter deleted successfully');
        this.get('model').removeObject(filter);
      });
    }
  }
});
