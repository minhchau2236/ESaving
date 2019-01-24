const debug = require('debug')('app:setupDatabase');
const Sequelize = require('sequelize');
const host = require('../config/config.json');

debug(host.development);

const sequelize = new Sequelize(host.development);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// require our model files
const models = {
  outcomeCategory: require('./outcomeCategoryModel')(sequelize, Sequelize),
  outcomeItem: require('./outcomeItemModel')(sequelize, Sequelize),
  outcome: require('./outcomeModel')(sequelize, Sequelize),
  user: require('./userModel')(sequelize, Sequelize)
};

// call associate on each of the models
debug(Object.keys(models));
Object.keys(models).forEach(key => {
  if (models[key] && models[key].associate) {
    models[key].associate(models);
  }
});

module.exports = models;