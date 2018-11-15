const debug = require('debug')('app:outcomeCategoryService');
const sql = require('mssql');

function outcomeCategoryService(sequelize) {
  const Category = require('../models/outcomeCategoryModel')(sequelize);
  function get() {
    return new Promise((resolve, reject) => {
      const request = new sql.Request();
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
      const request = new sql.Request();
      let queryString = '';
      if (!data.id) {
        queryString = `INSERT INTO Category (name)
        VALUES (@name)`;
      } else {
        queryString = `Update Category 
        set Category.name = @name
        where Category.id = @id`;
      }
      request.input('name', sql.NVarChar, data.name)
        .input('id', sql.Int, data.id)
        .query(queryString, (err) => {
          if (err) {
            reject(err);
          }
          resolve(data);
        });
    });
  }

  function getById(id) {
    return new Promise((resolve, reject) => {
      const request = new sql.Request();
      const sqlQueryString = `select * from Category where id=${id}`;
      request.query(sqlQueryString, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  }

  function remove(id) {
    return new Promise((resolve, reject) => {
      const request = new sql.Request();
      const sqlQueryString = `delete from Category where id=${id}`;
      request.query(sqlQueryString, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  }
  return {
    get, save, getById, remove,
  };
}
module.exports = outcomeCategoryService;
