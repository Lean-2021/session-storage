import { Router } from "express";
import login from "../middleware/login.js";
const router = Router();

router.get("/", login, async (req, res) => {
  //ruta principal -mostrar formulario de ingreso de productos
  const nombre = req.session.nombre;
  res.render("index", {
    title: "Inicio -Infoweb",
    nombre: nombre,
  });
});

router.post("/", (req, res) => {
  const { nombre } = req.body;
  req.session.nombre = nombre;
  res.redirect("/");
});

export default router;
