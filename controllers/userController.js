const { Author } = require("../models");

//ver formulario de creacion
async function create(req, res) {
  res.render("register");
}

module.exports = {
  create,
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
