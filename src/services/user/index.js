const service = require('feathers-sequelize');
const hooks = require('./hooks');

module.exports = function (app) {
  const { users: Model } = app.get('models');

  let options = {
    id: '_id',
    Model: Model,
    paginate: {
      default: 10000,
      max: 10000
    }
  };

  app.use('/users', service(options));

  const userService = app.service('/users');
  userService.hooks(hooks);
};
