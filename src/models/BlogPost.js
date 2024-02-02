'use strict';

const { date } = require('joi');

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost',
    {
      id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts',
    });

  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User, { foreignKey: 'userId', as: 'user' })
  };

  return BlogPost;
};