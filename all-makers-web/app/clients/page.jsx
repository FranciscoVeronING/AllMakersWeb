import Navbar from '../../components/Navbar';

export default function ClientsPage() {
  return (
    <>
      <Navbar />

      <main className="contenedor">
        <h1>Nuestros Clientes</h1>
        
        <div className="nosotros"> {/* Reutilizamos la grilla de dos columnas */}
            <div className="nosotros__contenido">
                <p>En All-Makers trabajamos junto a emprendedores, diseñadores y empresas que buscan materializar sus ideas con la máxima precisión técnica.</p>
                <p>Desde prototipos de ingeniería y piezas mecánicas personalizadas hasta proyectos de diseño artístico y decorativo, nos enfocamos en optimizar cada impresión para cumplir con las tolerancias y acabados mecánicos más exigentes.</p>
            </div>
            <img className="nosotros__img" src="/gr1.jpg" alt="Trabajos realizados" />
        </div>
      </main>

      <footer className="footer">
        <p className="footer__texto"> All-Makers - Todos los Derechos Reservados 2026.</p>
      </footer>
    </>
  );
}