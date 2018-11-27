const debug = require('debug')('app:outcomeItemService');
const sql = require('mssql');
const Sequelize = require('sequelize');

function OutcomeItemService(db) {
  const OutcomeItem = db.outcomeItem;
  function get() {
    return new Promise((resolve, reject) => {
      OutcomeItem.findAll().then((categories) => {
        resolve(categories);
      });
    });
  }

  function save(data) {
    return new Promise((resolve, reject) => {
      OutcomeItem.findByPk(data.id).then(async (outcomeItem) => {
        if (!outcomeItem) {
          return OutcomeItem.create(data);
        } else {
          outcomeItem.name = data.name;
          outcomeItem.amount = data.amount;
          outcomeItem.description = data.description;
          outcomeItem.outcomeCategoryId = data.outcomeCategoryId;
          outcomeItem.actionDate = data.actionDate;
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
      OutcomeItem.findByPk(id, {
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
    get, save, getById, remove,
  };
}
module.exports = OutcomeItemService;
