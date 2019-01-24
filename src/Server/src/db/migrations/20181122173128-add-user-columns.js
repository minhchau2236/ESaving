'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 
      'password', {
        type: Sequelize.STRING
      }).then(()=>{
        return queryInterface.addColumn('Users', 
        'email', {
          type: Sequelize.STRING
        })
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users', // name of Source model
      'password'
    );
  }
};
