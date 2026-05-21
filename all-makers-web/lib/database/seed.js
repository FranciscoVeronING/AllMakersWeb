const Database = require('better-sqlite3');
const db = new Database('allmakers.db');

console.log("Iniciando carga de datos de prueba...");

// Preparamos las consultas SQL
const insertProducto = db.prepare('INSERT INTO productos (nombre, descripcion, imagen_url) VALUES (?, ?, ?)');
const insertVariante = db.prepare('INSERT INTO variantes (producto_id, tamano, material, color, precio, stock) VALUES (?, ?, ?, ?, ?, ?)');

// Insertamos un producto (Maceta)
const maceta = insertProducto.run('Maceta Suculenta Geométrica', 'Maceta de diseño moderno, ideal para interiores.', '/p1.jpg');
const macetaId = maceta.lastInsertRowid;

// Le agregamos un par de variantes a la maceta
insertVariante.run(macetaId, '5x5cm', 'PLA', 'Pastel', 120, 10);
insertVariante.run(macetaId, '7x7cm', 'PLA', 'Pastel', 180, 5);
insertVariante.run(macetaId, '10x10cm', 'PETG', 'Negro', 250, 2);

// Insertamos otro producto (Soporte)
const soporte = insertProducto.run('Soporte para Auriculares', 'Soporte de escritorio resistente.', '/p1.jpg'); // Usamos la misma imagen por ahora
const soporteId = soporte.lastInsertRowid;

// Le agregamos una variante al soporte
insertVariante.run(soporteId, 'Estándar', 'PLA', 'Rojo', 350, 8);

console.log("¡Datos insertados correctamente!");