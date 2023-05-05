const { faker } = require("@faker-js/faker");
const { Comment } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const comments = [];

  for (let i = 0; i < 100; i++) {
    comments.push({
      userName: faker.name.findName(),
      userComment: faker.lorem.paragraph(1),
      // articleId: faker.datatype.number({ min: 1, max: 500 }),
    });
  }

  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Comments.");
};
