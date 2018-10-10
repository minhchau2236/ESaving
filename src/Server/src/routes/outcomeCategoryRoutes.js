const express = require('express');

const outcomeCateogryRouter = express.Router();
const outcomeCategoryController = require('../controllers/outcomeCategoryController');

function router() {
  const {
    get, save, getById, remove,
  } = outcomeCategoryController();
  outcomeCateogryRouter.route('')
    .get(get)
    .post(save)
    .put(save);
  outcomeCateogryRouter.route('/:id')
    .get(getById)
    .delete(remove);
  return outcomeCateogryRouter;
}

module.exports = router;
