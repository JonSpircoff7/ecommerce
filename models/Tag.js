const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

const Tag = sequelize.define(
  "tag",
  {
    // define columns
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    // define options
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Tag;
