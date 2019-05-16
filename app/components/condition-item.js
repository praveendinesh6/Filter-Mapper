/*
  Renders the conditions for the filter
*/
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Component.extend({
  constants: service(),
  isDateField: equal('selectedFieldValue.type', 'date'),
  isEmailField: equal('selectedFieldValue.type', 'email'),

  predicateList: computed('selectedFieldValue.type', {
    get() {
      return this.get('selectedFieldValue.type') === 'date' ? this.get('constants.datePredicateList') : this.get('constants.stringPredicateList');
    },
    set(key, value) {
      return value;
    }
  }),
  selectedFieldValue: computed('model.field', 'constants.fieldsList', function() {
    const fieldsList = this.constants.fieldsList || [];
    return fieldsList.findBy('name', this.model.field);
  }),

  actions: {
    changeFieldValue(value) {
      let oldFieldType = this.get('selectedFieldValue.type');
      let newFieldType = value.type;
      if(oldFieldType !== newFieldType) {
        this.model.setProperties({
          predicate: null,
          timeframe: null,
          timeframecount: null,
          description: null,
          email: null
        });
      }
      this.model.setProperties({
        field: value.name,
        field_type: value.type
      });
    }
  }
});
