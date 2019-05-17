import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),
  queryParams: {
    page: {
      refreshModel: true
    },
    per_page: {
      refreshModel: true
    },
    sort_column: {
      refreshModel: true
    },
    sort_order: {
      refreshModel: true
    }
  },

  model(params) {
    let paramsMap = {
      _page: params.page || 1,
      _limit: params.per_page || 10,
      _sort: params.sort_column,
      _order: params.sort_order === 'A' ? 'asc' : 'desc'
    }
    return this.get('store').findAll('/filters', paramsMap);
  },

  rresetController(controller, isExiting) {
    if (isExiting) {
      controller.setProperties({
        searchText: '',
        page: 1,
        per_page: 10,
        sort_column: 'id',
        sort_order: 'D'
      });
    }
  },

  actions: {
    addNewFilter() {
      this.transitionTo('filters.create');
    }
  }
});
