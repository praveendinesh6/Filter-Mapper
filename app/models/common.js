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
});
