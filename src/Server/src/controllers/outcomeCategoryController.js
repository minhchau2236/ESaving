
const outcomeCategoryService = require('../services/outcomeCategoryService');

function outcomeCategoryController() {
  function get(req, res) {
    (async function query() {
      const responseData = await outcomeCategoryService().get();
      const result = {
        data: responseData.recordset,
      };
      res.status(200).json(result);
    }());
  }

  function save(req, res) {
    (async function query() {
      const responseData = await outcomeCategoryService().save(req.body);
      const result = {
        data: responseData,
      };
      res.status(201).json(result);
    }());
  }

  function getById(req, res) {
    (async function query() {
      const responseData = await outcomeCategoryService().getById(req.params.id);
      const result = {
        data: responseData,
      };
      res.status(200).json(result);
    }());
  }

  function remove(req, res) {
    (async function query() {
      const responseData = await outcomeCategoryService().remove(req.params.id);
      const result = {
        data: responseData,
      };
      res.status(204).json(result);
    }());
  }
  return {
    get, save, getById, remove,
  };
}
module.exports = outcomeCategoryController;