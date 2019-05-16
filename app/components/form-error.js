import Component from '@ember/component';

export default Component.extend({
  actions: {
    clearErrors() {
      this.set('errorMessages', '');
    }
  }
});
