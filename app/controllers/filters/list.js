import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';
import { get, computed } from '@ember/object';

export default Controller.extend({
  notify: service('notify'),
  store: service(),
  queryParams: ['page', 'per_page', 'sort_column', 'sort_order'],

  page: 1,
  per_page: 10,
  sort_column: 'id',
  sort_order: 'D',
  searchText: '',

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

  filterdList: computed('searchText', 'model.[]', function() {
    let model = this.get('model');
    let searchText = this.get('searchText') || '';
    if(isPresent(this.get('searchText'))) {
      return model.filter((filterValue) => {
        let descriptionValue = get(filterValue, 'description') || '';
        return descriptionValue.toLowerCase().includes(searchText.toLowerCase())
      })
    }
    return model || [];
  }),

  actions: {
    clearFilter() {
      this.set('searchText', null);
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
      }).catch(() => {
        this.get('notify').error('Filter could not be deleted');
      });
    }
  }
});
