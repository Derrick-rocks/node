'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return [
      await queryInterface.addColumn('Products', 'price', {
        type: Sequelize.FLOAT
      }),
      await queryInterface.addColumn('Products', 'spec', {
        type: Sequelize.STRING,
      })
    ];

    },

  down: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.removeColumn('Products', 'price'),
      await queryInterface.removeColumn('Products', 'spec')
    ];
  }
};
