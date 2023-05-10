const { passport } = require("../config/passport");

function login(req, res) {
  console.log("Entro a login");
  passport.authenticate("local", {
    successRedirect: "/welcome",
    failureRedirect: "/",
  })(req, res);
}

//ver formulario de login
async function show(req, res) {
  res.render("login");
}

module.exports = { login, show };
