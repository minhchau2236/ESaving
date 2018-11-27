const debug = require('debug')('app:outcomeItemController');

function OutcomeItemController(db) {
  const outcomeItemService = require('../services/OutcomeItemService')(db);
  function get(req, res) {
    (async function query() {
      const responseData = await outcomeItemService.get();
      // const result = {
      //   data: responseData.recordset,
      // };
      res.status(200).json(responseData);
    }());
  }

  function save(req, res) {
    (async function query() {
      const responseData = await outcomeItemService.save(req.body);
      // const result = {
      //   data: responseData,
      // };
      res.status(201).json(responseData);
    }());
  }

  function getById(req, res) {
    (async function query() {
      const responseData = await outcomeItemService.getById(req.params.id);
      // const result = {
      //   data: responseData,
      // };
      res.status(200).json(responseData);
    }());
  }

  function remove(req, res) {
    (async function query() {
      const responseData = await outcomeItemService.remove(req.params.id);
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
module.exports = OutcomeItemController;
