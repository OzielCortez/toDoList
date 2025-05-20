const express = require('express');
const app = require("./app.js");
const PORT = 3001;
const cors = require('cors');
const { conn } = require('./db.js');
const todosRouter = require('./routes/todos.js');

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: "Hola desde el backend" });
});

app.use("/api/todos", todosRouter);


conn.sync({ alter: true })
    .then(() => {
        app.listen(PORT, () =>
            console.log(`Servidor en http://localhost:${PORT}`)
        );
    })
    .catch(err => console.error("Error al conectar la BD:", err));