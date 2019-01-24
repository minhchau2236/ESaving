'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('OutcomeItems', 
      'outcomeId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Outcomes',
          key: 'id'
        },
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'OutcomeItems', 'outcomeId'
    );
  }
};
