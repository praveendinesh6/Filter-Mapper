import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),
  model(params) {
    return this.get('store').getJSON(`/filters/${params.filter_id}`).then((json) => {
      return json;
    })
  },
  actions: {
    moveToList() {
      this.transitionTo('filters.list');
    }
  }
});
