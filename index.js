// index.js
const express = require('express');
const app = express();
const port = 8002;

app.get('/', (req, res) => {
    res.send('Hola Mundo 2');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
