import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),
  notify: service('notify'),
  model(params) {
    return this.get('store').getJSON(`/filters/${params.filter_id}`).then((json) => {
      return json;
    }).catch(() => {
      this.get('notify').error('Could not fetch filter details');
    });
  },
  actions: {
    moveToList() {
      this.transitionTo('filters.list');
    }
  }
});
