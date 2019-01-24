'use strict';
const debug = require('debug')('app:outcomeItemModel');
module.exports = (sequelize, DataTypes) => {
  const OutcomeItem = sequelize.define('OutcomeItem', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    actionDate: DataTypes.DATE,
    amount: DataTypes.INTEGER,
    outcomeId: DataTypes.INTEGER
  }, {});
  OutcomeItem.associate = function(models) {
    OutcomeItem.belongsTo(models.outcomeCategory);
    OutcomeItem.belongsTo(models.outcome);
  };
  return OutcomeItem;
};