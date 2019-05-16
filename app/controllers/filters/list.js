import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service('notify'),
  queryParams: ['page', 'per_page', 'sort_column', 'sort_order', 'search_text'],

  page: 1,
  per_page: 10,
  sort_column: 'id',
  sort_order: 'D',
  search_text: '',

  listHeaders: [
    {
      key: 'Filter No',
      width: "15%",
      sort_column: 'id',
    },{
      key: 'Filter Name',
      width: "40%",
      sort_column: 'description',
    },{
      key: 'Action',
      width: "40%"
    },{
      width: "7%"
    }
  ],

  actions: {
    searchFilter() {
      this.setProperties({
        page: 1,
        search_text: this.model.searchText
      })
    },
    clearFilter() {
      this.set('search_text', '');
    },
    sortDidChange() {
      this.set('page', 1);
    },
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
