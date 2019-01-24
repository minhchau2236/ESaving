const debug = require('debug')('app:outcomeItemController');

function OutcomeItemController(db) {
  const outcomeItemService = require('../services/OutcomeItemService')(db);
  function get(req, res) {
    (async function query() {
      const responseData = await outcomeItemService.get();
      res.status(200).json(responseData);
    }());
  }

  function save(req, res) {
    (async function query() {
      const responseData = await outcomeItemService.save(req.body);
      res.status(201).json(responseData);
    }());
  }

  function getById(req, res) {
    (async function query() {
      const responseData = await outcomeItemService.getById(req.params.id);
      res.status(200).json(responseData);
    }());
  }

  function getByOutcomeId(req, res) {
    (async function query() {
      const responseData = await outcomeItemService.getByOutcomeId(req.params.outcomeId);
      res.status(200).json(responseData);
    }());
  }

  function remove(req, res) {
    (async function query() {
      const responseData = await outcomeItemService.remove(req.params.id);
      res.status(204).json(responseData);
    }());
  }
  return {
    get, save, getById, remove, getByOutcomeId
  };
}
module.exports = OutcomeItemController;
