const service = require('feathers-sequelize');
const hooks = require('./hooks');

module.exports = function (app) {
  const { thoughts: Model } = app.get('models');

  let options = {
    id: '_id',
    Model: Model,
    paginate: {
      default: 10000,
      max: 10000
    }
  };

  app.use('/thoughts', service(options));

  const usersCourseService = app.service('/thoughts');
  usersCourseService.hooks(hooks);
};
