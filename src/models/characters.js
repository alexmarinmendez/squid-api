const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('character', {    
    characterRole: {
      type: DataTypes.STRING,
      allowNull: false
    },
    actorName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    characterName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    playerNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    characterDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imageUrl: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
  });
};
