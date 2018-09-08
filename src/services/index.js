const user = require('./user');
const challenge = require('./challenge');
const thought = require('./thought');

module.exports = function (app) {
  app.configure(user);
  app.configure(challenge);
  app.configure(thought);
};
