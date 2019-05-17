/*
  A wrapper for the browser fetch api
  @method createRecord - Create an Ember Object instance for the model along with passed inputProperties
  @method getJSON - Used for making a standard GET API request
  @method sendRequest - Used for making standard POST/PUT api along with params passed
  @method findAll - Finds all the entries of the required entity and handles queryparam values
  @method destroyRecord - Used to delete a record
*/

import Service from '@ember/service';
import { getOwner } from '@ember/application';
import { isPresent } from '@ember/utils';
export default Service.extend({
  apiPrefix: window.location.host.indexOf('codesandbox') === -1 ? 'http://localhost:3000' : 'https://itr0e.sse.codesandbox.io',

  createRecord(modelName, inputProperties) {
    inputProperties = inputProperties || {};
    let modelProxy = getOwner(this).factoryFor(`model:${modelName}`);
    return modelProxy.create(inputProperties);
  },

  getJSON(api) {
    let url = `${this.apiPrefix}${api}`;
    return fetch(url, {
      method: 'GET'
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    });
  },

  sendRequest(api, data) {
    let url = `${this.apiPrefix}${api}`;
    let method = 'POST';
    if(isPresent(data.id)) {
      url += `/${data.id}`;
      method = 'PUT';
    }
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    });
  },

  findAll(api, params) {
    let url = `${this.apiPrefix}${api}`;
    if(params) {
      url += `?${jQuery.param(params)}`;
    }
    return fetch(url, {
      method: 'GET'
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    });
  },

  destroyRecord(api, data) {
    let url = `${this.apiPrefix}${api}/${data.id}`;
    return fetch(url, {
      method: 'DELETE',
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    });
  }
});
