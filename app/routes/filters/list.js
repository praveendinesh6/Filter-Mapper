import Route from '@ember/routing/route';
import { isPresent } from '@ember/utils';
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
    },
    search_text: {
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
    if(isPresent(params.search_text)) {
      paramsMap.description_like = params.search_text;
    }
    return this.get('store').findAll('/filters', paramsMap);
  },

  setupController(controller, model) {
    this._super(controller, model);
    if(isPresent(controller.search_text)) {
      model.set('searchText', controller.search_text);
    }
  },

  actions: {
    addNewFilter() {
      this.transitionTo('filters.create');
    }
  }
});
