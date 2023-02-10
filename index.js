const express = require("express");
const { MongoClient, CURSOR_FLAGS, ObjectId } = require("mongodb");

const DB_URL = "mongodb+srv://andre:andre123@cluster0.holxi2u.mongodb.net";
const DB_NAME = "ocean-bancodados-09-02-2023";

async function main() {
    console.log("Conectando com banco de dados...");
    const client = await MongoClient.connect(DB_URL);
    console.log("Banco de dados conectado com sucesso.");

    const db = client.db(DB_NAME);
    const collection = db.collection("itens");

    const app = express();

    app.use(express.json());

    app.get("/", function (req, res) {
        res.send("Hello World");
    });

    app.get("/oi", function (req, res) {
        res.send("Olá Mundo");
    });

    const itens = ["Rick Sanchez", "Morty Smith", "Summer Smith"];

    app.get("/item", async function (req, res) {
        const documentos = await collection.find().toArray();
        res.send(documentos);
    });

    app.get("/item/:id", function (req, res) {
        const id = req.params.id;
        const item = itens[id - 1];
        res.send(item);
    });

    app.post("/item", function (req, res) {
        const item = req.body;
        itens.push(item.nome);
        res.send("Item criado com sucesso");
    });

    app.listen(3000);
}

main();