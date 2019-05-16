import commonResource from 'filter-mapper/models/common';
import { isBlank } from '@ember/utils';

export default commonResource.extend({
  properties: ['action_name', 'label_name', 'action_type'],

  validate() {
    let errorMessages = [];
    if(isBlank(this.get('action_name'))) {
      errorMessages.push('Choose a action for the filter');
    }
    if(this.get('action_type') === 'update' && isBlank(this.get('label_name'))) {
      errorMessages.push('Enter the label name for the action');
    }
    return errorMessages;
  }

});
