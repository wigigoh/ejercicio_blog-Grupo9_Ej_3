function isAdmin(req, res, next) {
  if (req.user.roleId === 1) {
    console.log(req.user.role.code);
    return next();
  } else {
    res.redirect("back");
  }
}

function isEditor(req, res, next) {
  if (req.user.roleId <= 2) {
    return next();
  } else {
    res.redirect("back");
  }
}

function isWriter(req, res, next) {
  if (req.user.roleId <= 3) {
    return next();
  } else {
    res.redirect("back");
  }
}

module.exports = { isAdmin, isEditor, isWriter };
