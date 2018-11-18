const Sequelize = require('sequelize');

function getCategoryModel(sequelize) {
  let CategoryModel = sequelize.define('Category', {
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
  // CategoryModel.removeAttribute('id');

  return CategoryModel;
}

module.exports = getCategoryModel;