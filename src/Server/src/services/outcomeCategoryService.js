const debug = require('debug')('app:outcomeCategoryService');
const sql = require('mssql');

function outcomeCategoryService(sequelize) {
  const Category = require('../models/outcomeCategoryModel')(sequelize);
  function get() {
    return new Promise((resolve, reject) => {
      // const request = new sql.Request();
      Category.findAll().then((categories) => {
        resolve(categories);
      });
      // request.query('select * from Category', (err, result) => {
      //   if (err) {
      //     reject(err);
      //   }
      //   resolve(result);
      // });
    });
  }

  function save(data) {
    return new Promise((resolve, reject) => {
      Category.findById(data.id).then((category) => {
        if (!category) {
          return Category.create(data, {fields: ['name']});
        } else {
          category.name = data.name;
          return category.save();
        }
      }).then((newCategory) => {
        resolve(newCategory);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  function getById(id) {
    return new Promise((resolve, reject) => {
      Category.findById(id).then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      })
    });
  }

  function remove(id) {
    return new Promise((resolve, reject) => {
      Category.findById(id).then((category) => {
        if (category) {
          return category.destroy({ force: true });
        }
        return null;
      }).then((category) => {
        debug(category);
        resolve(category);
      }).catch((err) => {
        reject(err);
      });
    });
  }
  return {
    get, save, getById, remove,
  };
}
module.exports = outcomeCategoryService;
