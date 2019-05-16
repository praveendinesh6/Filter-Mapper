/*
  Handles pagination for entity list page.
  @params page - current page number
  @params perPage - Per page value for the list

*/
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { gt } from '@ember/object/computed';

export default Component.extend({
  constants: service(),
  showPrevious: gt('page', 1),

  rangeText: computed('model.[]', 'page', 'perPage', function() {
    let page = this.page;
    let perPage = this.perPage;
    let model = this.model;
    let start = ((page - 1) * perPage) + 1;
    let end = ((page - 1) * perPage) + model.length;
    return `${start} - ${end}`;
  }),

  actions: {
    goToPrevious() {
      let currentPage = this.get('page');
      if (currentPage > 1) {
        this.set('page', --currentPage);
      }
    },
    goToNext() {
      let currentPage = this.get('page');
      this.set('page', ++currentPage);
    }
  }
});
