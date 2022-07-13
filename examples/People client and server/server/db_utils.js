const fs = require("fs");
let db;
const dbName = "../database.json";

/// Reading the db from the file system into the db variable
const readDb = () => db = JSON.parse(fs.readFileSync(dbName));

const saveDb = () => fs.writeFileSync(dbName, JSON.stringify(db));

const getNextId = (tableName) => Math.max(...db[tableName].map(entity => entity.id)) + 1;

if (!db)
  readDb();

module.exports.db = db;
module.exports.saveDb = saveDb;
module.exports.getNextId = getNextId;