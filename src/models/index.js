const user = require('./UserModel');
const thought = require('./ThoughtModel');
const challenge = require('./ChallengeModel');

module.exports = function (app) {
  const sequelize = app.get('sequelize');

  app.configure(user());
  app.configure(thought());
  app.configure(challenge());

  Object.keys(sequelize.models)
    .map(name => sequelize.models[name])
    .filter(model => model.associate !== undefined)
    .forEach(model => model.associate());

  app.set('models', sequelize.models);
};
