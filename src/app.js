// src/app.js

const express = require('express');
const { formatDate, generateUniqueId } = require('./lib/index');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const today = formatDate(new Date());
    const id = generateUniqueId();
    res.send(`Bonjour ! Aujourd'hui, nous sommes le ${today}. Votre ID est : ${id}`);
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
