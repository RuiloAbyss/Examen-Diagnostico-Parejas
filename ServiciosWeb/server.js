const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Servidor Corriendo");
});

let tareas = [
  { id: 1, titulo: "Inicio del CRUD", completada: true, fechaCreacion: new Date("2025-08-01") },
  { id: 2, titulo: "Ingresar usuario 2", completada: false, fechaCreacion: new Date("2025-08-20") },
  { id: 3, titulo: "Revisar servidor HTTP", completada: false, fechaCreacion: new Date("2025-08-25") }
];


app.post("/tareas", (req, res) => {
  const nuevaTarea = {
    id: tareas.length + 1,
    titulo: req.body.titulo,
    completada: req.body.completada || false,
    fechaCreacion: new Date()
  };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

app.get("/tareas", (req, res) => {
  res.json(tareas);
});

app.get("/tareas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);

  if (tarea) {
    res.json(tarea);
  } else {
    res.status(404).json({ mensaje: "Tarea no encontrada" });
  }
});

app.put("/tareas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);

  if (tarea) {
    tarea.titulo = req.body.titulo || tarea.titulo;
    tarea.completada = req.body.completada !== undefined ? req.body.completada : tarea.completada;
    res.json(tarea);
  } else {
    res.status(404).json({ mensaje: "Tarea no encontrada" });
  }
});

app.delete("/tareas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = tareas.findIndex(t => t.id === id);

  if (index !== -1) {
    const eliminada = tareas.splice(index, 1);
    res.json({ mensaje: "Tarea eliminada", eliminada });
  } else {
    res.status(404).json({ mensaje: "Tarea no encontrada" });
  }
});


app.listen(PORT, () => {
    console.log('Server corriendo en http://localhost:${PORT}');
});
