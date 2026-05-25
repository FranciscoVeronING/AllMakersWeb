import Navbar from '../../../components/Navbar';
import FormCompra from '../../../components/FormCompra';
import Database from 'better-sqlite3';

function getProductoDesdeDB(id) {
  const db = new Database('allmakers.db');
  const producto = db.prepare('SELECT * FROM productos WHERE id = ?').get(id);
  const variantes = db.prepare('SELECT * FROM variantes WHERE producto_id = ?').all(id);
  return { producto, variantes };
}

export default async function ProductoPage({ params }) {
  const { id } = await params;
  const { producto, variantes } = getProductoDesdeDB(id);

  if (!producto || variantes.length === 0) {
    return (
      <>
        <Navbar />
        <main className="contenedor"><h1>Producto no encontrado o sin stock</h1></main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="contenedor">
        <h1>{producto.nombre}</h1>

        <div className="maceta">
            <img className="maceta__img" src={producto.imagen_url} alt={producto.nombre} />

            <div className="maceta__contenido">
                <p>{producto.descripcion}</p>
                <FormCompra variantes={variantes} productoBase={producto} />
            </div>
        </div>
      </main>

      <footer className="footer">
        <p className="footer__texto"> All-Makers - Todos los Derechos Reservados 2026.</p>
      </footer>
    </>
  );
}