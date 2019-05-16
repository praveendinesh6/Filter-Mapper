import { isBlank } from '@ember/utils';

let isEmailID = function(value) {
  if (isBlank(value)) {
    return false;
  }
  let val = value;
  let objRegExp = /^[a-zA-Z0-9]([\w\-\.\+\']*)@([\w\-\.]*)(\.[a-zA-Z]{2,22}(\.[a-zA-Z]{2}){0,2})$/i;
  if (objRegExp.test(val)) {
    return true;
  }
  return false;
};

export { isEmailID };
