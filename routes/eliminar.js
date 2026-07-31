const express = require("express");
const router = express.Router();
const { tareas } = require("../data");

// elimina una tarea por id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = tareas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "tarea no encontrada" });
  }

  tareas.splice(index, 1);
  res.json({ mensaje: "tarea eliminada" });
});

module.exports = router;
