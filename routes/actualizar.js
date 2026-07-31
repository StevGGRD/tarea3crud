const express = require("express");
const router = express.Router();
const { tareas } = require("../data");

// actualiza una tarea existente
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);

  if (!tarea) {
    return res.status(404).json({ error: "tarea no encontrada" });
  }

  if (req.body.titulo !== undefined) {
    tarea.titulo = req.body.titulo;
  }
  if (req.body.completada !== undefined) {
    tarea.completada = req.body.completada;
  }

  res.json(tarea);
});

module.exports = router;
