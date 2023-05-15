function isWriter(req, res, next) {
  if (req.user.role.code < 400) {
    return next();
  } else {
    res.redirect("back");
  }
}

module.exports = isWriter;
