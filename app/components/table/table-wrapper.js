import Component from '@ember/component';
import { computed } from '@ember/object';
import { isBlank } from '@ember/utils';
export default Component.extend({
  tagName: 'table',
  classNames: ['table-wrapper'],
  isEmptyList: computed('content.[]', 'isLoading', function() {
    if (isBlank(this.get('content')) && (!this.get('isLoading'))) {
      return true;
    } else {
      return false;
    }
  }),
  actions: {
    sortDidChange() {
      this.sortDidChange();
    }
  }
});
