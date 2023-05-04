const { Model, DataTypes } = require("sequelize");
const { sequelize } = require(".");

class Author extends Model {
  static initModel(sequelize) {
    Author.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        authorFirstname: {
          type: DataTypes.STRING,
        },
        authorLastname: {
          type: DataTypes.STRING,
        },
        authorEmail: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "author",
        timestamps: false,
      },
    );
    return Author;
  }
}

module.exports = Author;
