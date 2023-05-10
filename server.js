require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const methodOverride = require("method-override");
const APP_PORT = process.env.APP_PORT;
const app = express();
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { findByPk } = require("./models/Comment");

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(
  session({
    secret: "algo",
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.session());
passport.use(
  new LocalStrategy({ usernameField: "email" }, async function (email, password, done) {
    try {
      //Buscar en la base de datos el usuario que se quiere conectar
      const user = await User.findOne({ where: { email: username } });
      //Este usuario existe?
      if (!user) {
        //NO: damos por finalizada la autenticacion

        return done(null, false, { message: "Credenciales incorrectas" });
      }
      //SI: seguimos autenticando
      //El password que ingreso el usuario, ¿es correcto? (bcrypt)
      const checkPasswords = await bcrypt.compare(password, user.password);
      if (!checkPasswords) {
        //NO: damos por finalizada la autenticacion ->
        return done(null, false, { message: "Credenciales Incorrectas" });
      }

      //Si llegamos hasta aqui, el usuario existe e ingreso de manera correcta su contraseña!
      //Lo unico que queda es confirmar la autenticacion del usuario ->
      return done(null, user);
    } catch (error) {
      //Si la promesa (Buscar al usuario en la base de datos) fue rechazada, damos por finalizada la autentcacion...
      return done(error);
    }
  }),
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

//ruta protegida (solo acceso a usuarios logueados)

app.get("/welcome", function (req, res) {
  if (req.isAuthenticated()) {
    res.send(`Te damos la bienvenida, ${req.user.firstname}!!`);
  } else {
    res.redirect("/login");
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/welcome",
    failureRedirect: "/login",
    failureFlash: true,
  }),
);

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
