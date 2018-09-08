const Sequelize = require('sequelize');

function toDate (d) {
  const n = Date.parse(d);

  if (isNaN(n)) {
    throw new Error('Invalid date: ' + d);
  } else {
    return new Date(n);
  }
}

module.exports = function () {
  return function (app) {
    /** @type {Sequelize.Sequelize} */
    const sequelize = app.get('sequelize');

    sequelize.define('users', {
      _id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      score: {
        type: Sequelize.INTEGER,
        allowNUll: false,
        defaultValue: 0
      }
    }, {
      freezeTableName: true
    });
  };
};
