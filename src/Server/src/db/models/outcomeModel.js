'use strict';
const debug = require('debug')('app:outcomeModel');
module.exports = (sequelize, DataTypes) => {
  const Outcome = sequelize.define('Outcome', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    actionDate: DataTypes.DATE
  }, {});
  Outcome.associate = function(models) {
    Outcome.hasMany(models.outcomeItem);
  };
  return Outcome;
};