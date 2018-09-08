const Sequelize = require('sequelize');

module.exports = function () {
  return function (app) {
    /** @type {Sequelize.Sequelize} */
    const sequelize = app.get('sequelize');

    let ChallengeModel = sequelize.define('challenges', {
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
      points: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    }, {
      freezeTableName: true
    });
    ChallengeModel.associate = () => {
      ChallengeModel.belongsTo(sequelize.models.users);
    };
  };
};
