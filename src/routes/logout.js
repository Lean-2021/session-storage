import { Router } from "express";
const router = Router();

router.post("/", (req, res) => {
  // res.render("logout", {
  //   title: "Logout",
  //   nombre: req.session.nombre,
  // });
  req.session.destroy((err) => {
    if (!err) {
      res.redirect("/login");
    } else {
      res.send({ status: "Error al borrar session" });
    }
  });
});

export default router;
