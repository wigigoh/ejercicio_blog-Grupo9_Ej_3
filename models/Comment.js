const { Model, DataTypes } = require("sequelize");

class Comment extends Model {
  static initModel(sequelize) {
    Comment.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        userName: {
          type: DataTypes.TEXT,
        },
        userComment: {
          type: DataTypes.TEXT,
        },
        commentDate: {
          type: DataTypes.DATE,
        },
      },
      {
        sequelize,
        modelName: "comment",
        timestamps: false,
      },
    );
    return Comment;
  }
}

module.exports = Comment;
