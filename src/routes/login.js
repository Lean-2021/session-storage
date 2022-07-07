import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  //mostrar pagin de Login
  res.render("login", {
    title: "Inicio - Login",
  });
});

router.post("/", (req, res) => {
  //enviar nombre de la persona que ingreso
  const { nombre } = req.body;
  req.session.nombre = nombre;
  res.redirect("/");
});

export default router;
