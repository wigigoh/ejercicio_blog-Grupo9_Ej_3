const { addMinutes } = require("date-fns");

async function makeUserAvailableInViews(req, res, next) {
  res.locals.user = req.user;
  res.locals.isAuthenticated = req.isAuthenticated();
  res.locals.roles = { 1: "Admin", 2: "Editor", 3: "Escritor", 4: "Lector" };

  next();
}

module.exports = makeUserAvailableInViews;
