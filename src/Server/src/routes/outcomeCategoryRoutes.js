const express = require('express');

const outcomeCateogryRouter = express.Router();
const outcomeCategoryController = require('../controllers/OutcomeCategoryController');

const VerifyToken = require('../auth/VerifyToken');

function router(db) {
  const {
    get, save, getById, remove,
  } = outcomeCategoryController(db);
  outcomeCateogryRouter.use(VerifyToken);
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
