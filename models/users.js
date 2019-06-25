'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    status: DataTypes.STRING,
    profile_img_url: DataTypes.TEXT,
    location: DataTypes.STRING
  }, {});
  users.associate = function (models) {
    // associations can be defined here
    users.hasMany(models.posts, {
      foreignKey: 'user_id'
    });
  }
  return users;
};