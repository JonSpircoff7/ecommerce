const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // Define the id column
    id: {
      type: DataTypes.INTEGER, // The data type for this column is an integer
      allowNull: false, // This column cannot be null
      primaryKey: true, // This column is the primary key
      autoIncrement: true, // The value for this column is generated automatically
    },
    // Define the product_id column
    productId: {
      type: DataTypes.INTEGER, // The data type for this column is an integer
      allowNull: false, // This column cannot be null
      references: {
        // This column is a foreign key that references the id column of the products table
        model: 'products',
        key: 'id',
      },
      onUpdate: 'CASCADE', // If the referenced product's id is updated, also update this value
      onDelete: 'CASCADE', // If the referenced product is deleted, also delete this row
    },
    // Define the tag_id column
    tagId: {
      type: DataTypes.INTEGER, // The data type for this column is an integer
      allowNull: false, // This column cannot be null
      references: {
        // This column is a foreign key that references the id column of the tags table
        model: 'tags',
        key: 'id',
      },
      onUpdate: 'CASCADE', // If the referenced tag's id is updated, also update this value
      onDelete: 'CASCADE', // If the referenced tag is deleted, also delete this row
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
