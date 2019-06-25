'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('posts', [
      {
        content: 'Sesungguhnya orang-orang kafir, sama saja bagi mereka, engkau (Muhammad) beri peringatan atau tidak engkau beri peringatan, mereka tidak akan beriman.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        content: ' Dan di antara manusia ada yang berkata, “Kami beriman kepada Allah dan hari akhir,” padahal sesungguhnya mereka itu bukanlah orang-orang yang beriman.',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
    ], {});


  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('posts', null, {});
  }
};
