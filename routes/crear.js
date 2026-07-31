const express = require("express");
const router = express.Router();
const { tareas, nuevoId } = require("../data");

// crea una tarea nueva
router.post("/", (req, res) => {
  const titulo = req.body.titulo;

  if (!titulo) {
    return res.status(400).json({ error: "falta el titulo" });
  }

  const tarea = {
    id: nuevoId(),
    titulo: titulo,
    completada: false,
    fecha: new Date().toISOString()
  };

  tareas.push(tarea);
  res.status(201).json(tarea);
});

module.exports = router;
