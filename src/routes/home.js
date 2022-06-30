import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  //ruta principal -mostrar formulario de ingreso de productos
  res.render("index", {
    title: "Inicio -Infoweb",
  });
});

export default router;
