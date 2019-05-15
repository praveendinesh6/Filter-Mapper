import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('filters', function() {
    this.route('create', { path: '/create' });
    this.route('edit', { path: '/:filter_id/edit' });
    this.route('list', { path: '/list' })
    this.route('details', { path: '/:filter_id' });
  });
});

export default Router;
