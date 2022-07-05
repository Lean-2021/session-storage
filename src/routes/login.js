import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("login", {
    title: "Inicio - Login",
  });
});

export default router;
