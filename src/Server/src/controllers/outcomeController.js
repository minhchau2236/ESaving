const debug = require('debug')('app:outcomeController');

function OutcomeController(db) {
  const outcomeService = require('../services/OutcomeService')(db);
  function get(req, res) {
    (async function query() {
      const responseData = await outcomeService.get();
      // const result = {
      //   data: responseData.recordset,
      // };
      res.status(200).json(responseData);
    }());
  }

  function save(req, res) {
    (async function query() {
      const responseData = await outcomeService.save(req.body);
      // const result = {
      //   data: responseData,
      // };
      res.status(201).json(responseData);
    }());
  }

  function getById(req, res) {
    (async function query() {
      const responseData = await outcomeService.getById(req.params.id);
      // const result = {
      //   data: responseData,
      // };
      res.status(200).json(responseData);
    }());
  }

  function remove(req, res) {
    (async function query() {
      const responseData = await outcomeService.remove(req.params.id);
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
module.exports = OutcomeController;
