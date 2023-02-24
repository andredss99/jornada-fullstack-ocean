require("dotenv").config();

const express = require("express");
const { MongoClient, CURSOR_FLAGS, ObjectId } = require("mongodb");
const cors = require('cors');

const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URL = "mongodb+srv://andre:" + DB_PASSWORD + "@cluster0.holxi2u.mongodb.net";
const DB_NAME = "ocean-bancodados-09-02-2023";

async function main() {
    console.log("Conectando com banco de dados...");
    const client = await MongoClient.connect(DB_URL);
    console.log("Banco de dados conectado com sucesso.");

    const db = client.db(DB_NAME);
    const collection = db.collection("itens");

    const app = express();

    app.use(cors());

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

    app.get("/item/:id", async function (req, res) {
        const id = req.params.id;
        const item = await collection.findOne({_id: new ObjectId(id)});
        res.send(item);
    });

    app.post("/item", async function (req, res) {
        const item = req.body;
        await collection.insertOne(item);
        res.send(item);
    });

    app.put("/item/:id", async function (req, res) {
        const id = req.params.id;
        const body = req.body;
        await collection.updateOne(
            {_id: new ObjectId(id)},
            {$set: body}
        );
        res.send(body);
    });

    app.delete("/item/:id", async function (req, res) {
        const id = req.params.id;
        await collection.deleteOne({_id: new ObjectId(id)});
        res.send("OK");
    });

    const port = process.env.PORT || 3000;
    app.listen(port, function() {
        console.log("Servidor rodando na porta " + port);
    });
}

main();