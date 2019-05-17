/*
  Search field that debounces the input actions and assign value to valueRef
*/
import TextField from '@ember/component/text-field';
import { debounce } from '@ember/runloop';

export default TextField.extend({
  init() {
    this._super(...arguments);
    this.updateInputValue();
  },
  didUpdateAttrs() {
    this._super(...arguments);
    this.updateInputValue();
  },
  updateInputValue() {
    // Input value should be updated when valueRef changes. This should not happen for normal valueRef update
    let valueRef = this.get('valueRef');
    let previousValue = this.get('previousValue');
    if(previousValue !== valueRef) {
      this.set('value', valueRef);
    }
  },
  updateSearchValue(value) {
    this.setProperties({
      valueRef: value,
      previousValue: value
    });
  },
  keyUp(event) {
    debounce(this, 'updateSearchValue', event.target.value, 300);
  }
});
