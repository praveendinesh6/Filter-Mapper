import commonResource from 'filter-mapper/models/common';
import { isBlank } from '@ember/utils';
import { isEmailID } from 'filter-mapper/utils/validation';
export default commonResource.extend({
  properties: ['field', 'predicate', 'value', 'email', 'timeframecount', 'timeframe'],
  validate() {
    let errorMessages = [];
    let fieldType = this.fieldType;
    if(isBlank(this.field)) {
      errorMessages.push('Enter field name for all the conditions');
    }
    if(isBlank(this.predicate)) {
      errorMessages.push('Choose the predicate value for all the conditions');
    }
    if(fieldType === 'date') {
      if(isBlank(this.timeframecount)) {
        errorMessages.push('Enter the timeframe to compare the conditions');
      }
      if(isBlank(this.timeframe)) {
        errorMessages.push('Choose the execution timeframe for all the conditions');
      }
    } else if(fieldType === 'email') {
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
