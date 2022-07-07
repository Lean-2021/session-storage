import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  //ruta principal -mostrar formulario de ingreso de productos
  if (req.session.nombre) {
    //si existe un sesion mostrar pagina de inicio
    res.render("index", {
      title: "Inicio -Infoweb",
      nombre: req.session.nombre,
    });
  } else {
    //sino existe sesion redireccionar a login
    res.redirect("/login");
  }
});

export default router;
