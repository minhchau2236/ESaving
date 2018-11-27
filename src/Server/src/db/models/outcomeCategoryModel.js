'use strict';
module.exports = (sequelize, DataTypes) => {
  const OutcomeCategory = sequelize.define('OutcomeCategory', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  OutcomeCategory.associate = function(models) {
    OutcomeCategory.hasMany(models.outcomeItem);
  };
  return OutcomeCategory;
};