import commonResource from 'filter-mapper/models/common';
import { isBlank } from '@ember/utils';
import { isArray } from '@ember/array';
import { inject as service } from '@ember/service';

export default commonResource.extend({
  store: service(),
  properties: ['id', 'description', 'predicate', 'conditions', 'actions'],

  deserializeProperty(prop, value) {
    if (prop === 'conditions') {
      value = isArray(value) ? value : [];
      value.forEach((conditionObj, i) => {
        value[i] = this.get('store').createRecord('conditions').deserialize(conditionObj);
      });
    }
    if (prop === 'actions') {
      value = isArray(value) ? value : [];
      value.forEach((actionObj, i) => {
        value[i] = this.get('store').createRecord('actions').deserialize(actionObj);
      });
    }
    this._super(prop, value);
  },

  validate() {
    let errors = [];

    if (isBlank(this.get('description'))) {
      errors.push('Enter description for the filter');
    }
    this.get('conditions').forEach((condition) => {
      errors = errors.concat(condition.validate());
    });
    this.get('actions').forEach((action) => {
      errors = errors.concat(action.validate());
    });

    return errors.uniq();
  }
});
