import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Component.extend({
  constants: service(),
  isDateField: equal('selectedFieldValue.type', 'date'),
  predicateList: computed('selectedFieldValue.type', {
    get() {
      return this.get('selectedFieldValue.type') === 'date' ? this.get('constants.datePredicateList') : this.get('constants.stringPredicateList');
    },
    set(key, value) {
      return value;
    }
  }),
  selectedFieldValue: computed('model.field', 'constants.fieldsList', function() {
    const fieldsList = this.get('constants.fieldsList') || [];
    return fieldsList.findBy('name', this.get('model.field'));
  }),
  actions: {
    changeFieldValue(value) {
      let oldFieldType = this.get('selectedFieldValue.type');
      let newFieldType = value.type;
      if(oldFieldType !== newFieldType) {
        this.get('model').setProperties({
          predicate: null,
          timeframe: null,
          timeframecount: null,
          description: null,
          email: null
        });
      }
      this.get('model').setProperties({
        field: value.name,
        fieldType: value.type
      });
    }
  }
});
