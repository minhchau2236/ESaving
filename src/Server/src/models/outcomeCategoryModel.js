const Sequelize = require('sequelize');

function getCategoryModel(sequelize) {
  return sequelize.define('Category', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    }, 
    name: Sequelize.STRING
  },
  {
    timestamps: false,
    tableName: 'Category'
  });
}

module.exports = getCategoryModel;