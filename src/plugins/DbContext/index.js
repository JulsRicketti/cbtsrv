const Sequelize = require('sequelize');
const Config = require('../../../config');

// The DB context plugin. Creates a Sequelize instance and a DB context.
//
// The plugin can optionally take a config object. If no config object is
// specified then uses the object from the 'db' key from the app config.
//
// Sets the following app config keys:
//
// - 'sequelize' Set to an instance of Sequelize
// - 'db' Set to an object with the following methods:
//   - sync() Synchronizes all defined schemas and returns a promies.
//
// Usage:
// app.configure(DbContext())
module.exports = function DbContextPlugin () {
  return function DbContext () {
    const app = this;

    const sequelize = new Sequelize(Config.DATABASE_URL, {
      dialect: 'postgres',
      logging: Config.SEQUELIZE_LOGGING
    });

    app.set('sequelize', sequelize);

    app.set('db', {
      // Create the schema.
      sync ({ force = false } = {}) {
        const sequelize = app.get('sequelize');
        return sequelize.sync({ force });
      }
    });
  };
};
