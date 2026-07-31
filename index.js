const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

// cargo todas las rutas que estan dentro de la carpeta routes
const carpetaRutas = './routes';
if (fs.existsSync(carpetaRutas)) {
  fs.readdirSync(carpetaRutas).forEach((archivo) => {
    const ruta = require(`${carpetaRutas}/${archivo}`);
    app.use('/tareas', ruta);
  });
}

app.get('/', (req, res) => {
  res.send('API de tareas funcionando');
});

const PUERTO = 3000;
app.listen(PUERTO, () => {
  console.log('Servidor corriendo en el puerto ' + PUERTO);
});
