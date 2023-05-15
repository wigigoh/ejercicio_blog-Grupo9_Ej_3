function isAdmin(req, res, next) {
  if (req.user.role.code < 200) {
    return next();
  } else {
    res.redirect("back");
  }
}

module.exports = isAdmin;
