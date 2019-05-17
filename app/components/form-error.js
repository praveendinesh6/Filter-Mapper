/*
  Shows the error messages in entity create page

  @params errorMessages - List of error messages to be displayed

*/
import Component from '@ember/component';
import { isPresent } from '@ember/utils';
import { later } from '@ember/runloop';

export default Component.extend({
  errorMessages: null,
  attributeBindings: ['tabindex'],
  tabindex: '-1',
  classNames: ['no-outline'],
  didUpdateAttrs() {
    this._super(...arguments);
    // This check avoids focusing on top when the content is set to []
    if (isPresent(this.get('errorMessages'))) {
      later(this, function() {
        this.$().focus();
      });
    }
  },
  actions: {
    clearErrors() {
      this.set('errorMessages', '');
    }
  }
});
