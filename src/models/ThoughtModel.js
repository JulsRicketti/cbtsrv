const Sequelize = require('sequelize');

module.exports = function () {
  return function (app) {
    /** @type {Sequelize.Sequelize} */
    const sequelize = app.get('sequelize');

    let ThoughtModel = sequelize.define('thoughts', {
      _id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      what: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
    }, {
      freezeTableName: true
    });
    ThoughtModel.associate = () => {
      ThoughtModel.belongsTo(sequelize.models.users);
    };
    ThoughtModel.associate = () => {
      ThoughtModel.belongsTo(sequelize.models.challenges);
    };
  };
};
