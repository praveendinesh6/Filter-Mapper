/*
  Helper to increment the passed value by 1. Used for showing filter no in filters list 
*/
import Helper from '@ember/component/helper';
export function arrayIndexPosition(params = []) {
  return params[0] + 1;
}

export default Helper.helper(arrayIndexPosition);
