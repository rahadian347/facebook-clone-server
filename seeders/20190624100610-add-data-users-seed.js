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
    return queryInterface.bulkInsert('users', [
      {
        username: 'mandex',
        password: '1234',
        fullname: 'Mohammad Rahadian Permana',
        status: 'Begitulah',
        profile_img_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjAwMjE2NDExNF5BMl5BanBnXkFtZTcwODAwODg4OQ@@._V1_SY1000_CR0,0,806,1000_AL_.jpg',
        location: 'Buahbatu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'johnsnow',
        password: '1234',
        fullname: 'Aegon Targaryen',
        status: 'The King In The North, The Lord Commander Of The Noghtswatch',
        profile_img_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwMjUxMDk2OV5BMl5BanBnXkFtZTcwMzg3MTg4OQ@@._V1_.jpg',
        location: 'the north of the wall',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'sansastark',
        password: '1234',
        fullname: 'Sansa Stark',
        status: 'The Queen In The North',
        profile_img_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjAwMjE2NDExNF5BMl5BanBnXkFtZTcwODAwODg4OQ@@._V1_SY1000_CR0,0,806,1000_AL_.jpg',
        location: 'winterfell',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'aryastark',
        password: '1234',
        fullname: 'Arya Stark',
        status: 'The Queen In The North',
        profile_img_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5MTYwNDc0OF5BMl5BanBnXkFtZTcwOTg2NDg1Nw@@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
        location: 'Bravos',
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
    return queryInterface.bulkDelete('users', null, {});
  }
};
