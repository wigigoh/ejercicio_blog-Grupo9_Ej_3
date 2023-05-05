const { faker } = require("@faker-js/faker");
const { Author } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const authors = [];

  for (let i = 0; i < 100; i++) {
    authors.push({
      authorFirstname: faker.name.firstName(),
      authorLastname: faker.name.lastName(),
      authorEmail: faker.internet.email(),
    });
  }

  await Author.bulkCreate(authors);
  console.log("[Database] Se corrió el seeder de Authors.");
};
