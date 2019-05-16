import commonResource from 'filter-mapper/models/common';
import { isBlank } from '@ember/utils';
import { isEmailID } from 'filter-mapper/utils/validation';
export default commonResource.extend({
  properties: ['field', 'predicate', 'value', 'email', 'timeframecount', 'timeframe', 'field_type'],

  validate() {
    let errorMessages = [];
    let field_type = this.field_type;
    if(isBlank(this.field)) {
      errorMessages.push('Enter field name for all the conditions');
    }
    if(isBlank(this.predicate)) {
      errorMessages.push('Choose the predicate value for all the conditions');
    }
    if(field_type === 'date') {
      if(isBlank(this.timeframecount)) {
        errorMessages.push('Enter the timeframe to compare the conditions');
      }
      if(isBlank(this.timeframe)) {
        errorMessages.push('Choose the execution timeframe for all the conditions');
      }
    } else if(field_type === 'email') {
      if(!isEmailID(this.email)) {
        errorMessages.push('Enter a proper Email ID for the condition');
      }
    } else {
      if(isBlank(this.value)) {
        errorMessages.push('Enter a proper value for all the conditions');
      }
    }
    if(isBlank(this.field)) {
      errorMessages.push('Enter field name for all the conditions');
    }
    return errorMessages;
  }
});
