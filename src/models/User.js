'use strict';

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { primaryKey: true, type: DataTypes.INTEGER },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'users'
    });

  User.associate = ({ BlogPost }) => {
    User.hasMany(BlogPost, { foreignKey: 'userId', as: 'posts' })
  }

  return User;
};