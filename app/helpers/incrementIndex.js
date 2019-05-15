import Helper from '@ember/component/helper';
export function arrayIndexPosition(params = []) {
  return params[0] + 1;
}

export default Helper.helper(arrayIndexPosition);
