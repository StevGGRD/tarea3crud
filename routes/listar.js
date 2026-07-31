const express = require("express");
const router = express.Router();
const { tareas } = require("../data");

// devuelve todas las tareas
router.get("/", (req, res) => {
  res.json(tareas);
});

// devuelve una tarea por id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);

  if (!tarea) {
    return res.status(404).json({ error: "tarea no encontrada" });
  }

  res.json(tarea);
});

module.exports = router;
