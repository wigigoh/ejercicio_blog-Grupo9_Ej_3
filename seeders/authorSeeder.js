const { faker } = require("@faker-js/faker");
const { Author } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const authors = [];

  for (let i = 0; i < 30; i++) {
    authors.push({
      authorFirstname: faker.name.firstName(),
      authorLastname: faker.name.lastName(),
      authorEmail: faker.internet.email(),
      roleId: faker.datatype.number({ min: 1, max: 4 }),
      password: await bcrypt.hash(faker.internet.password(), 5),
    });
  }

  await Author.bulkCreate(authors);
  console.log("[Database] Se corrió el seeder de Authors.");
};
