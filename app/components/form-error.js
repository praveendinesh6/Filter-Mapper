/*
  Shows the error messages in entity create page

  @params errorMessages - List of error messages to be displayed

*/
import Component from '@ember/component';

export default Component.extend({
  actions: {
    clearErrors() {
      this.set('errorMessages', '');
    }
  }
});
