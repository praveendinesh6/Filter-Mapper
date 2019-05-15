import Controller from '@ember/controller';
import { isBlank } from '@ember/utils';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  constants: service(),
  loadCreationDetails() {
    if(isBlank(this.get('model.conditions'))) {
      this.set('model.conditions', [this.get('store').createRecord('conditions')]);
    }
    if(isBlank(this.get('model.actions'))) {
      this.set('model.actions', [this.get('store').createRecord('actions')]);
    }
  },
  actions: {
    addNewCondition() {
      this.get('model.conditions').pushObject(this.get('store').createRecord('conditions'));
    },
    removeCondition(condition) {
      if (this.get('model.conditions.length') > 1) {
        this.get('model.conditions').removeObject(condition);
      }
    },
    addNewAction() {
      this.get('model.actions').pushObject(this.get('store').createRecord('actions'));
    },
    removeAction(action) {
      if (this.get('model.actions.length') > 1) {
        this.get('model.actions').removeObject(action);
      }
    },
    updatePredicate(value) {
      this.set('model.predicate', value);
    },
    saveFilter() {
      this.get('store').sendRequest('/filters', this.get('model')).then(() => {
        this.transitionTo('filters.list');
      })
    }
  }
});
