import Service from '@ember/service';
import { getOwner } from '@ember/application';

export default Service.extend({
  apiPrefix: 'http://localhost:3000',

  createRecord(modelName, inputProperties) {
    inputProperties = inputProperties || {};
    let modelProxy = getOwner(this).factoryFor(`model:${modelName}`);
    return modelProxy.create(inputProperties);
  },

  getJSON(api) {
    let url = `${this.apiPrefix}${api}`;
    return fetch(url, {
      method: 'GET'
    }).then(response => response.json());
  },

  sendRequest(api, data) {
    let url = `${this.apiPrefix}${api}`;
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then(response => response.json());
  },
  destroyRecord(api, data) {
    let url = `${this.apiPrefix}${api}/${data.id}`;
    return fetch(url, {
      method: 'DELETE',
    }).then(response => response.json());
  }
});
