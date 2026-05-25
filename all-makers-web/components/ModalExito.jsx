"use client";
import Link from 'next/link';

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: '#fff', padding: '2rem', borderRadius: '8px',
    maxWidth: '400px', width: '90%', textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  botonesContainer: {
    display: 'flex', justifyContent: 'space-between', gap: '1rem', marginTop: '1.5rem'
  },
  botonSeguir: {
    padding: '1rem', border: '2px solid #dfdfdf', backgroundColor: 'transparent',
    cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold'
  },
  botonCarrito: {
    padding: '1rem', backgroundColor: '#0fb9e4', color: '#fff',
    textDecoration: 'none', cursor: 'pointer', fontWeight: 'bold'
  }
};

export default function ModalExito({ isOpen, onClose, productoNombre }) {
  if (!isOpen) return null; // Si no está abierto, no renderizamos nada

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={{ color: '#0fb9e4', marginTop: 0 }}>¡Agregado con éxito!</h2>
        <p>Se agregó <strong>{productoNombre}</strong> a tu carrito.</p>
        
        <div style={styles.botonesContainer}>
          <button onClick={onClose} style={styles.botonSeguir}>
            Seguir comprando
          </button>
          
          <Link href="/carrito" style={styles.botonCarrito}>
            Ir al Carrito
          </Link>
        </div>
      </div>
    </div>
  );
}

