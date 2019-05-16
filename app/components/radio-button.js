/*
  Handles the radio button for boolean and string values
  @params value - value provided by the radio button
  @params selection - Current stored radio button value
  @method onChange - trigger change in the radio button value

*/
import Component from '@ember/component';
import { computed } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
  tagName: 'input',
  type: 'radio',

  attributeBindings: [
    'type',
    'value',
    'checked:checked',
  ],

  change() {
    if(this.get('onChange')) {
      scheduleOnce('sync', this, function() {
        this.onChange(this.get('value'));
      });
    }
  },
  checked: computed('selection', function() {
    let value = this.get('value');
    let selection = this.get('selection');

    if (typeof (selection) === 'object' || selection === undefined) {
      return value === selection;
    }
    return value === selection + '';
  })
});
