const { Author } = require("../models");
const formidable = require("formidable");

//ver formulario de creacion
async function create(req, res) {
  res.render("register");
}

//guardar un nuevo usuario
async function store(req, res) {
  if (req.body.password === req.body.confPassword) {
    // const lastUserId = await Author.max("id");
    await Author.create({
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 3),
    });
  } else {
    alert("Contraseña no coincide");
    console.log(fields);
    return res.redirect("login");
  }
  res.redirect("/");
}

//ver formulario de login
async function show(req, res) {
  res.render("login");
}

module.exports = {
  create,
  store,
  show,
};

// 2. Crear las siguientes rutas:
// a. [GET] http://localhost:3000/registro.
// b. [POST] http://localhost:3000/registro.
// c. [GET] http://localhost:3000/login.
// Documento confidencial. No compartir con terceros. Página 3 de 12
// https://ha.dev
// hola@ha.dev
// d. [POST] http://localhost:3000/login.
// e. [GET] http://localhost:3000/logout.
