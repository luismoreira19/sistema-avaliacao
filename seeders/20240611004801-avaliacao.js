'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('avaliacaos', [
      {
        idProduto: 1,
        idUsers: 1,
        classificacao: 10,
        comentario: 'ótima qualidade do arroz!',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('avaliacaos', { idProduto:1}, {}); 
  }
};
