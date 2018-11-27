const debug = require('debug')('app:outcomeCategoryController');

function OutcomeCategoryController(db) {
  const outcomeCategoryService = require('../services/OutcomeCategoryService')(db);
  function get(req, res) {
    (async function query() {
      const responseData = await outcomeCategoryService.get();
      // const result = {
      //   data: responseData.recordset,
      // };
      res.status(200).json(responseData);
    }());
  }

  function save(req, res) {
    (async function query() {
      const responseData = await outcomeCategoryService.save(req.body);
      // const result = {
      //   data: responseData,
      // };
      res.status(201).json(responseData);
    }());
  }

  function getById(req, res) {
    (async function query() {
      const responseData = await outcomeCategoryService.getById(req.params.id);
      // const result = {
      //   data: responseData,
      // };
      res.status(200).json(responseData);
    }());
  }

  function remove(req, res) {
    (async function query() {
      const responseData = await outcomeCategoryService.remove(req.params.id);
      // const result = {
      //   data: responseData,
      // };
      res.status(204).json(responseData);
    }());
  }
  return {
    get, save, getById, remove,
  };
}
module.exports = OutcomeCategoryController;
