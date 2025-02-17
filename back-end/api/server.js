// API - Application Programing Interface
// Endpoint - uma rota que pode ser acessada dentro de um api
// Middleware - função que acontece no meio do caminho
// app.use(express.json) - permite converter a resposta da requisição em um json

import express from "express";
import cors from 'cors';
import { db } from "./connect.js";
import path, { dirname } from "path";

const app = express();
const PORT = 3000;
const __dirname = path.resolve();

app.use(cors());

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
})

app.get("/api/artists", async (resquest, response) => {
  response.send(await db.collection("artists").find({}).toArray());
})

app.get("/api/songs", async (resquest, response) => {
  response.send(await db.collection("songs").find({}).toArray());
})

app.use(express.static(path.join(__dirname, '../../front-end/dist/')))

app.get("*", async (resquest, response) => {
  response.sendFile(path.join(__dirname, '../../front-end/dist/index.html'));
})

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
})