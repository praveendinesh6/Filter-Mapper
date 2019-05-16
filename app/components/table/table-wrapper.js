/*
  Wrapper for the table component and handles table header

  @params listHeaders - List of table header columns
    key - name of the header column
    width - custom width for the header
    sort_column - sort_column value to update
*/
import Component from '@ember/component';

export default Component.extend({
  tagName: 'table',
  classNames: ['table-wrapper'],
  actions: {
    sortDidChange() {
      this.sortDidChange();
    }
  }
});
