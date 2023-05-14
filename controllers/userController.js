const { Author } = require("../models");
const formidable = require("formidable");
const bcrypt = require("bcryptjs");
const passportConfig = require("../config/passport");

//ver formulario de creacion
async function create(req, res) {
  res.render("register");
}

//guardar un nuevo usuario
async function store(req, res) {
  let newAuthor;
  if (req.body.password === req.body.confPassword) {
    newAuthor = await Author.create({
      authorFirstname: req.body.firstName,
      authorLastname: req.body.lastName,
      authorEmail: req.body.email,
      password: await bcrypt.hash(req.body.password, 3),
      roleId: 4,
    });
  }
  if (newAuthor) {
    req.login(newAuthor, () => res.redirect("/"));
    console.log(req.user);
  } else {
    res.redirect("back");
  }
}

module.exports = {
  create,
  store,
};
