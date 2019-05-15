import { computed } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'input',
  type: 'radio',

  attributeBindings: [
    'name',
    'type',
    'value',
    'checked:checked',
    'disabled'
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
