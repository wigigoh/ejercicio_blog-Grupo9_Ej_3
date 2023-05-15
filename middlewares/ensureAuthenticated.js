function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(res.locals.user);

    return next();
  } else {
    req.session.redirectTo = req.query.redirectTo;
    res.redirect("/login");
  }
}

module.exports = ensureAuthenticated;
