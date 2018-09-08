const service = require('feathers-sequelize');
const hooks = require('./hooks');

module.exports = function (app) {
  const { challenges: Model } = app.get('models');

  let options = {
    id: '_id',
    Model: Model,
    paginate: {
      default: 10000,
      max: 10000
    }
  };

  app.use('/challenges', service(options));

  const usersCourseService = app.service('/challenges');
  usersCourseService.hooks(hooks);
};
