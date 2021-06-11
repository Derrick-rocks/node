'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.addColumn('Courses', 'deletedAt', {
        type: Sequelize.DATE
      }),

    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.removeColumn('Courses', 'deletedAt'),
    ];
  }
};
