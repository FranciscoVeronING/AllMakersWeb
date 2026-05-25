"use client"; 
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { carrito } = useCart(); 

  const totalItems = carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);

  return (
    <>
      <header className="header">
          <Link href="/"> 
              <img className="header__logo" src="/logo.png" alt="Logotipo" />
          </Link>
      </header>
      
      <nav className="navegacion">
          <Link className="navegacion__enlace" href="/">TIENDA</Link>
          <Link className="navegacion__enlace" href="/clients">CLIENTES</Link>
          <Link className="navegacion__enlace" href="/us">ALL-MAKERS</Link>
          <Link className="navegacion__enlace" href="/world3d">MUNDO 3D</Link>
          <Link 
            className="navegacion__enlace navegacion__enlace--activo" 
            href="/carrito"
          >
            CARRITO {totalItems > 0 && `(${totalItems})`}
          </Link>
      </nav>
    </>
  );
}