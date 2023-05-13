function isAdmin(req, res, next) {
  if (1 === 1) {
    console.log(req.user);
  } else {
    req.session.redirectTo = req.query.redirectTo;
    res.redirect("/login");
  }
}

module.exports = { isAdmin };
