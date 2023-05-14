/**
 * Este archivo se utiliza en un proyecto donde se está utlizando server-side
 * rendering (ej: con un motor de templates como EJS). Tiene como objetivo
 * mostrar (renderear) páginas que no están directamente relacionandas con
 * una entidad del proyecto.
 *
 * Ejemplos:
 *   - Página de inicio (Home).
 *   - Página de contacto.
 *   - Página con política de privacidad.
 *   - Página con términos y condiciones.
 *   - Página con preguntas frecuentes (FAQ).
 *   - Etc.
 *
 * En caso de estar creando una API, este controlador carece de sentido y
 * no debería existir.
 */

const { Article, Author, Comment } = require("../models");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");

async function index(req, res) {
  const articles = await Article.findAll({
    include: [Author, Comment],
    order: [["createdAt", "DESC"]],
  });
  articles.forEach((article) => {
    article.createdAt = format(article.createdAt, "dd 'de' MMMM','  yyyy", {
      locale: es,
    });
  });
  return res.render("home", { articles });
}

async function showAdmin(req, res) {
  if (req.user.roleId > 2) {
    const articles = await Article.findAll({ where: { authorId: req.user.id }, include: "author" });
    articles.forEach((article) => {
      article.dataValues.createdAt = format(
        article.dataValues.createdAt,
        "yyyy'-'MM'-'dd hh:mm:ss",
        {
          locale: es,
        },
      );
    });
    return res.render("admin", { articles });
  } else {
    const articles = await Article.findAll({ include: "author" });
    return res.render("admin", { articles });
  }
}

async function show(req, res) {
  const authors = await Author.findAll();
  return res.render("userPanel", { authors });
}

async function edit(req, res) {
  const author = await Author.findByPk(req.params.id);

  res.render("editUser", { author });
}

async function update(req, res) {
  const author = req.body;
  const authorId = req.params.id;
  console.log(author);
  await Author.update(
    {
      authorFirstname: author.firstName,
      authorLastname: author.lastName,
      authorEmail: author.email,
      roleId: author.role,
    },
    {
      where: { id: authorId },
    },
  );
  return res.redirect("/panel-usuarios");
}

async function destroy(req, res) {
  await Author.destroy({
    where: {
      id: req.params.id,
    },
  });

  await Article.destroy({
    where: {
      authorEmail: req.params.email,
    },
  });

  return res.redirect("/panel-usuarios");
}

// Otros handlers...
// ...

module.exports = {
  index,
  showAdmin,
  show,
  edit,
  update,
  destroy,
};
