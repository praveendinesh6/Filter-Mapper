import Service from '@ember/service';

export default Service.extend({

  timeframeList: ['days', 'month'],
  perPageList: ['10', '25', '50', '100'],

  fieldsList: [{
    name: 'from',
    type: 'email'
  }, {
    name: 'to',
    type: 'email'
  }, {
    name: 'subject',
    type: 'string'
  }, {
    name: 'message',
    type: 'string'
  }, {
    name: 'received date',
    type: 'date'
  }],

  stringPredicateList: ['contains', 'does not contains', 'equal', 'does not equal'],
  datePredicateList: ['less than', 'greater than'],

  actionsList: [{
    name: 'Mark as Read',
    type: 'action'
  }, {
    name: 'Mark as Unread',
    type: 'action'
  }, {
    name: 'Add label',
    type: 'update'
  }],
});
