/*
  Renders the actions in filter creation screen.
*/

import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Component.extend({
  constants: service(),
  canShowLabelField: equal('selectedActionValue.type', 'update'),

  selectedActionValue: computed('model.action_name', 'constants.actionsList', function() {
    const actionsList = this.get('constants.actionsList') || [];
    return actionsList.findBy('name', this.get('model.action_name'));
  }),

  actions: {
    changeActionValue(value) {
      let oldActionType = this.get('selectedActionValue.type');
      let newActionType = value.type;
      if(oldActionType !== newActionType) {
        this.set('model.label_name', null);
      }
      this.get('model').setProperties({
        action_name: value.name,
        action_type: value.type
      });
    }
  }
});
