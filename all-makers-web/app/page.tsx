import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

export default function Home() {
  // Simulamos los datos que luego vendrán de una consulta a la BD
  const productosDb = [
    { id: 1, nombre: "Maceta Suculenta", precio: 120, imagen: "/p1.jpg" },
    { id: 2, nombre: "Soporte Auriculares", precio: 350, imagen: "/p1.jpg" },
    { id: 3, nombre: "Llavero Personalizado", precio: 80, imagen: "/p1.jpg" },
    // ...
  ];

  return (
    <>
      <Navbar />

      <main className="contenedor">
        <h1>Todos los Productos</h1>

        <div className="grid">
          {productosDb.map((product) => (
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