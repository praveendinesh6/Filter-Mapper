/*

Provides common wrapper for the models
@method deseialize - Method to deserialize javascript object to Ember Object
@method deserializeProperty - Method to deserialize each property in the model
@method serialize - Method to remove null values from being passed back to server
@method validate - Used fot adding validation for all the properties in model

*/

import EmberObject from '@ember/object';

export default EmberObject.extend({

  deserialize(json) {
    Object.keys(json).forEach(prop => {
      this.deserializeProperty(prop, json[prop]);
    });

    return this;
  },
  deserializeProperty(property, value) {
    this.set(property, value);
  },

  serialize() {
    let props = this.properties, prop, ret = {};

    for (let i = 0; i < props.length; i++) {
      prop = props[i];
      ret[prop] = this.serializeProperty(prop);
    }
    return ret;
  },
  serializeProperty(prop) {
    let value = this.get(prop);
    if (value === null) {
      value = undefined;
    }
    return value;
  },

  validate() {}

});
