const debug = require('debug')('app:outcomeItemService');
const sql = require('mssql');
const Sequelize = require('sequelize');
const moment = require('moment');

function OutcomeItemService(db) {
  const OutcomeItem = db.outcomeItem;
  function get() {
    return new Promise((resolve, reject) => {
      OutcomeItem.findAll({
        include: [
          { model: db.outcomeCategory}
        ],
        order: [
          ['actionDate', 'DESC']
        ]
      }).then((outcomeItems) => {
        resolve(outcomeItems);
      });
    });
  }

  function save(data) {
    return new Promise((resolve, reject) => {
      OutcomeItem.findByPk(data.id).then(async (outcomeItem) => {
        if (!outcomeItem) {
          debug(data);
          return OutcomeItem.create(data);
        } else {          
          outcomeItem.name = data.name;
          outcomeItem.amount = data.amount;
          outcomeItem.description = data.description;
          outcomeItem.outcomeCategoryId = data.outcomeCategoryId;
          outcomeItem.actionDate = data.actionDate;
          outcomeItem.outcomeId = data.outcomeId;
          const selectedCategory = await db.outcomeCategory.findByPk(data.OutcomeCategoryId);
          if (selectedCategory) {
            outcomeItem.setOutcomeCategory(selectedCategory);
          }
          return outcomeItem.save();
        }
      }).then((newOutcomeItem) => {
        resolve(newOutcomeItem);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  function getById(id) {
    return new Promise((resolve, reject) => {
      OutcomeItem.findOne(id, {
        include: [
          { model: db.outcomeCategory}
        ]
      }).then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      })
    });
  }

  function getByOutcomeId(outcomeId) {
    return new Promise((resolve, reject) => {
      OutcomeItem.findAll({
        where: {
          outcomeId: outcomeId
        }
      }).then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      })
    });
  }

  function remove(id) {
    return new Promise((resolve, reject) => {
      OutcomeItem.findByPk(id).then((category) => {
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
    get, save, getById, remove, getByOutcomeId
  };
}
module.exports = OutcomeItemService;
