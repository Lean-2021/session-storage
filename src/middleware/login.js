function login(req, res, next) {
  if (!req.session) {
    res.redirect("/login");
  } else {
    return next();
  }
}
export default login;
