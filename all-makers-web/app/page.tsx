import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Database from 'better-sqlite3';

function getProductosDesdeDB() {
    const db = new Database('allmakers.db');

  const stmt = db.prepare(`
  SELECT p.id, p.nombre, p.imagen_url as imagen, MIN(v.precio) as precio
  FROM productos p
  LEFT JOIN variantes v ON p.id = v.producto_id
  WHERE p.activo = 1
  GROUP BY p.id 
  `);

  return stmt.all();
}

export default function Home() {
  const product = getProductosDesdeDB();
  return (
    <>
      <Navbar />

      <main className="contenedor">
        <h1>Todos los Productos</h1>

        <div className="grid">
          {product.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              nombre={product.nombre}
              precio={product.precio}
              imagen={product.imagen}
            />
          ))}
          <div className="grafico grafico--img1"></div> 
          <div className="grafico grafico--img2"></div> 
        </div>
      </main>

      <footer className="footer">
        <p className="footer__texto"> All-Makers - Todos los Derechos Reservados 2026.</p>
      </footer>
    </>
  );
}