import Route from '@ember/routing/route';
import { isPresent } from '@ember/utils';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),
  model(params) {
    if(isPresent(params.filter_id)) {
      //block
    } else {
      return this.get('store').createRecord('filters', { predicate: 'all' });
    }
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.loadCreationDetails();
  }
});
