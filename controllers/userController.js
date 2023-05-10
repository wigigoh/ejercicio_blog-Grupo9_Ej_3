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
  if (req.body.password === req.body.confPassword) {
    // const lastUserId = await Author.max("id");
    await Author.create({
      authorFirstname: req.body.firstName,
      authorLastname: req.body.lastName,
      authorEmail: req.body.email,
      password: await bcrypt.hash(req.body.password, 3),
    });
  } else {
    console.log("Error de contraseña");
    return res.redirect("login");
  }
  console.log("Usuario registrado");
  return res.redirect("/");
}

module.exports = {
  create,
  store,
};
