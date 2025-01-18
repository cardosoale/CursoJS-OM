const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users', [
        {
          nome: 'John Doe',
          email: 'jhondoe@email.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe Doe',
          email: 'jhondoedoe@email.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe Doe Doe',
          email: 'jhondoedoedoe@email.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {
      },
    );
  },

  async down() {
    // Este seeder não precisa de um down pois é apenas para dados iniciais.
  },
};
