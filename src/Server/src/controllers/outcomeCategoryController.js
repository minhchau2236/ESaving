const debug = require('debug')('app:outcomeCategoryController');

function OutcomeCategoryController(db) {
  const outcomeCategoryService = require('../services/OutcomeCategoryService')(db);
  function get(req, res) {
    (async function query() {
      const responseData = await outcomeCategoryService.get();
      res.status(200).json(responseData);
    }());
  }

  function save(req, res) {
    (async function query() {
      const responseData = await outcomeCategoryService.save(req.body);
      res.status(201).json(responseData);
    }());
  }

  function getById(req, res) {
    (async function query() {
      const responseData = await outcomeCategoryService.getById(req.params.id);
      res.status(200).json(responseData);
    }());
  }

  function remove(req, res) {
    (async function query() {
      const responseData = await outcomeCategoryService.remove(req.params.id);
      res.status(204).json(responseData);
    }());
  }
  return {
    get, save, getById, remove
  };
}
module.exports = OutcomeCategoryController;
