const debug = require('debug')('app:outcomeService');
const sql = require('mssql');
const Sequelize = require('sequelize');
const moment = require('moment');

function OutcomeService(db) {
  const Outcome = db.outcome;
  function get() {
    return new Promise((resolve, reject) => {
      Outcome.findAll({
        order: [
          ['actionDate', 'DESC']
        ]
      }).then((outcomes) => {
        resolve(outcomes);
      });
    });
  }

  function save(data) {
    return new Promise((resolve, reject) => {
      Outcome.findByPk(data.id).then(async (outcome) => {
        if (!outcome) {
          // data.id = parseInt(moment().format('YYYYMMDDHHmmSSms'));
          return Outcome.create(data);
        } else {          
          outcome.name = data.name;
          outcome.description = data.description;
          outcome.outcomeCategoryId = data.outcomeCategoryId;
          outcome.actionDate = data.actionDate;
          const selectedOutcome = await db.outcomeCategory.findByPk(data.OutcomeCategoryId);
          if (selectedOutcome) {
            outcome.setOutcomeCategory(selectedOutcome);
          }
          return outcome.save();
        }
      }).then((newOutcome) => {
        resolve(newOutcome);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  function getById(id) {
    return new Promise((resolve, reject) => {
      Outcome.findByPk(id).then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      })
    });
  }

  function remove(id) {
    return new Promise((resolve, reject) => {
      Outcome.findByPk(id).then((category) => {
        if (category) {
          return category.destroy({ force: true });
        }
        return null;
      }).then((category) => {
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
module.exports = OutcomeService;
