"use client";
import Navbar from '../../components/Navbar';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';

const styles = {
  itemCarrito: {
    display: 'flex', gap: '2rem', alignItems: 'center',
    padding: '2rem', backgroundColor: '#b9b9b9', 
    marginBottom: '1rem', borderRadius: '8px'
  },
  imagenMini: {
    width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px'
  },
  precioSubtotal: {
    fontSize: '2.4rem', fontWeight: 'bold', color: '#1288a5', margin: 0
  },
  resumenContainer: {
    backgroundColor: '#b9b9b9', padding: '2rem', borderRadius: '8px', 
    height: 'fit-content', textAlign: 'center'
  },
  botonPagar: {
    width: '100%', padding: '1.5rem', backgroundColor: '#0fb9e4', 
    color: '#fff', border: 'none', fontSize: '2rem', 
    fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem'
  },
  botonVolver: {
    display: 'inline-block', marginTop: '2rem', padding: '1rem 2rem', 
    backgroundColor: '#0fb9e4', color: '#fff', textDecoration: 'none', 
    fontWeight: 'bold', borderRadius: '4px'
  },
  controlCantidad: {
    display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem'
  },
  inputCantidad: {
    width: '70px', padding: '0.5rem', fontSize: '1.6rem', fontFamily: 'inherit',
    border: '1px solid #fff', borderRadius: '4px', backgroundColor: 'transparent'
  },
  accionesContainer: {
    display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem'
  },
  botonEliminar: {
    backgroundColor: 'transparent', border: 'none', color: '#ff4d4d',
    textDecoration: 'underline', cursor: 'pointer', fontSize: '1.6rem', fontFamily: 'inherit'
  }
};

export default function CarritoPage() {
  const { carrito, actualizarCantidad, eliminarDelCarrito } = useCart();

  const totalPagar = carrito.reduce(
    (acumulador, item) => acumulador + (item.variante.precio * item.cantidad), 0
  );

  return (
    <>
      <Navbar />

      <main className="contenedor">
        <h1>Tu Carrito de Compras</h1>

        {carrito.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p>Tu carrito está vacío.</p>
            <Link href="/" style={styles.botonVolver}>
              Volver a la tienda
            </Link>
          </div>
        ) : (
          <div className="grid">
            <div style={{ gridColumn: '1 / 3' }}>
              {carrito.map((item, index) => (
                <div key={index} style={styles.itemCarrito}>
                  <img src={item.producto.imagen_url} alt={item.producto.nombre} style={styles.imagenMini} />
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: 0, textAlign: 'left' }}>{item.producto.nombre}</h3>
                    <p style={{ margin: '0.5rem 0' }}>
                      Variante: {item.variante.tamano} - {item.variante.material} ({item.variante.color})
                    </p>
                    
                    <div style={styles.controlCantidad}>
                      <label htmlFor={`cant-${item.variante.id}`}>Cantidad:</label>
                      <input 
                        id={`cant-${item.variante.id}`}
                        type="number"
                        min="1"
                        max={item.variante.stock} // Limitamos al stock real de SQLite
                        value={item.cantidad}
                        onChange={(e) => actualizarCantidad(item.variante.id, parseInt(e.target.value) || 1)}
                        style={styles.inputCantidad}
                      />
                    </div>
                  </div>
                  
                  <div style={styles.accionesContainer}>
                    <p style={styles.precioSubtotal}>
                      ${item.variante.precio * item.cantidad}
                    </p>
                    <button 
                      onClick={() => eliminarDelCarrito(item.variante.id)}
                      style={styles.botonEliminar}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.resumenContainer}>
              <h2>Resumen</h2>
              <h3 style={{ color: '#000' }}>Total a pagar: ${totalPagar}</h3>
              <button style={styles.botonPagar}>
                Finalizar Compra
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p className="footer__texto"> All-Makers - Todos los Derechos Reservados 2026.</p>
      </footer>
    </>
  );
}