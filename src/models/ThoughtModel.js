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
      challengeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'challenges',
          key: '_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      title: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      what: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      where: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      expectation: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      reality: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      strengthInitial: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      automaticThought: {
        type: Sequelize.STRING(512),
        allowNull: true
      },
      supportingEvidence: {
        type: Sequelize.STRING(512),
        allowNull: true
      },
      nonSupportingEvidence: {
        type: Sequelize.STRING(512),
        allowNull: true
      },
      thinkingErrors: {
        type: Sequelize.STRING(512),
        allowNull: true
      },
      newBelief: {
        type: Sequelize.STRING(512),
        allowNull: true
      },
      strengthFinal: {
        type: Sequelize.INTEGER,
        allowNull: true
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
