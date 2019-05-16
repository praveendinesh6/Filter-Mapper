/*
  Renders the table header along with the sort handling when a sortable table header is clicked
*/
import Component from '@ember/component';
import { isPresent } from '@ember/utils';
import { computed, get } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  tagName: 'th',
  classNameBindings: ['content.sort_column:sortable', 'sorted'],
  attributeBindings: ['style'],

  sorted: computed('sortColumn', 'sortOrder', function() {
    let property = get(this.get('content'), 'sort_column');
    let sortColumn = this.get('sortColumn');
    let sortOrder = this.get('sortOrder');

    if ((isPresent(property)) && property === sortColumn) {
      return sortOrder === 'A' ? 'asc' : 'desc';
    }
    return '';

  }),

  style: computed('width', function() {
    let width = this.get('content.width');
    return htmlSafe(width ? `width:${ width}` : '');
  }),

  click() {
    let sortColumn = this.get('sortColumn');
    let sortOrder = this.get('sortOrder');
    let property = this.get('content.sort_column');

    if (property) {
      this.set('sortColumn', property);
      this.set('sortOrder', (property === sortColumn && sortOrder === 'A') ? 'D' : 'A');
      this.sortDidChange();
    }
  }
});
