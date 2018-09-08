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
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: '_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },

      title: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      difficulty: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('complete', 'incomplete'),
        defaultValue: 'incomplete',
        allowNull: false
      }
    }, {
      freezeTableName: true
    });
    ChallengeModel.associate = () => {
      ChallengeModel.belongsTo(sequelize.models.users);
    };
  };
};
