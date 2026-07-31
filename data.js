// aqui guardo las tareas en memoria, no estoy usando base de datos todavia
let tareas = [];
let siguienteId = 1;

function nuevoId() {
  const id = siguienteId;
  siguienteId++;
  return id;
}

module.exports = { tareas, nuevoId };
