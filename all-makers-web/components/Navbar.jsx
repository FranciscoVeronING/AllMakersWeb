import Link from 'next/link';

export default function Navbar() {
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
      </nav>
    </>
  );
}