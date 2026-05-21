-- 1. TABLA DE PRODUCTOS
CREATE TABLE productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    descripcion TEXT,
    imagen_url TEXT,
    activo BOOLEAN DEFAULT 1
);

-- 2. TABLA DE VARIANTES (Stock, Precios y Datos Técnicos)
CREATE TABLE variantes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    producto_id INTEGER,
    tamano TEXT NOT NULL,       -- ej: '5x5cm', '10x10cm'
    material TEXT NOT NULL,     -- ej: 'PLA', 'PETG', 'TPU'
    color TEXT NOT NULL,        -- ej: 'Rojo', 'Negro'
    precio REAL NOT NULL,       -- El precio depende de tamaño+material
    stock INTEGER DEFAULT 0,    -- Stock físico real listo para vender
    peso_gramos REAL,           -- Para futuro control de materia prima
    tiempo_impresion_min INTEGER, -- En minutos
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE
);

-- 3. TABLA DE IMPRESORAS
CREATE TABLE impresoras (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,       -- ej: 'Ender 3 Pro', 'Kobra 3 Max'
    volumen_x INTEGER,
    volumen_y INTEGER,
    volumen_z INTEGER
);

-- 4. TABLA DE G-CODES
CREATE TABLE archivos_gcode (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    variante_id INTEGER,
    impresora_id INTEGER,
    ruta_archivo TEXT NOT NULL, -- ej: '/gcodes/maceta_10x10_pla_ender3.gcode'
    notas TEXT,                 -- ej: 'Usar laca, brim 5mm'
    FOREIGN KEY (variante_id) REFERENCES variantes(id) ON DELETE CASCADE,
    FOREIGN KEY (impresora_id) REFERENCES impresoras(id) ON DELETE CASCADE
);

-- 5. TABLA DE PEDIDOS (Clientes invitados)
CREATE TABLE pedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_cliente TEXT NOT NULL,
    email TEXT NOT NULL,
    telefono TEXT,
    direccion_envio TEXT,
    total REAL NOT NULL,
    fecha_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado TEXT DEFAULT 'pendiente' -- pendiente, pagado, impreso, enviado
);

-- 6. TABLA DE DETALLES DEL PEDIDO
CREATE TABLE pedido_detalles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    pedido_id INTEGER,
    variante_id INTEGER,
    cantidad INTEGER NOT NULL,
    precio_unitario REAL NOT NULL, -- Se guarda para mantener historial si el precio cambia en el futuro
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE,
    FOREIGN KEY (variante_id) REFERENCES variantes(id)
);