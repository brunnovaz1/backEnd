const { MongoClient } = require("mongodb");

let db = null

const url = 'mongodb+srv://brunnovaz:admin1107@cluster0.t1pzmfx.mongodb.net/';

async function conectarDb() {
    if(db) {
        return db
    }

    const client = new MongoClient(url);
    await client.connect()
    db = client.db("agenda")
    return db;
}

module.exports = conectarDb