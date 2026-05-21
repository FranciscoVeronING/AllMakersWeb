const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

// 1. Crea o abre el archivo físico de la base de datos
const db = new Database('allmakers.db', { verbose: console.log });

// 2. Lee tu archivo schema.sql
const schemaPath = path.join(__dirname, 'schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf8');

// 3. Ejecuta el SQL para crear las tablas
db.exec(schema);

console.log("¡Base de datos inicializada y tablas creadas con éxito!");