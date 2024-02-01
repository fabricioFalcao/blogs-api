'use strict';

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { primaryKey: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'users'
    });

  return Category;
};