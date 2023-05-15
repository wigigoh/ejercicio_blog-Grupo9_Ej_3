function isEditor(req, res, next) {
  if (req.user.role.code < 300) {
    return next();
  } else {
    res.redirect("back");
  }
}

module.exports = isEditor;
