import Route from '@ember/routing/route';
import { isPresent } from '@ember/utils';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),
  model(params) {
    if(isPresent(params.filter_id)) {
      return this.get('store').getJSON(`/filters/${params.filter_id}`).then((json) => {
        return this.get('store').createRecord('filters').deserialize(json);
      })
    } else {
      return this.get('store').createRecord('filters', { predicate: 'all' });
    }
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.loadCreationDetails();
  },
  actions: {
    moveToList() {
      this.transitionTo('filters.list');
    }
  }
});
