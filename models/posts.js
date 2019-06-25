'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('posts', {
    content: DataTypes.TEXT,
    user_id: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  posts.associate = function(models) {
    // associations can be defined here
    posts.belongsTo(models.users, {
      foreignKey: 'user_id'
    });
  };
  return posts;
};