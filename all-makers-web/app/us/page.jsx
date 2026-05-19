import Navbar from '../../components/Navbar';

export default function UsPage() {
  return (
    <>
      <Navbar />

      <main className="contenedor">
        <h1>All-Makers</h1>
        
        <div className="nosotros">
            <div className="nosotros__contenido">
                <p>Nacimos con el objetivo de acercar la manufactura digital a todo tipo de proyectos. Nos especializamos en la optimización de código de corte (G-code), calibración fina de extrusión y flujos de trabajo eficientes para garantizar la repetibilidad y calidad de cada pieza impresa.</p>
            </div>
            <img className="nosotros__img" src="/nosotros.jpg" alt="Taller All-Makers" />
        </div>
      </main>

      <section className="contenedor comprar">
        <h2 className="comprar__titulo">¿Por qué comprar con nosotros?</h2>

        <div className="bloques">
            <div className="bloque">
                <img className="bloque__img" src="/icon1.png" alt="Precio" />
                <h3 className="bloque__titulo">El Mejor Precio</h3>
                <p>Optimizamos el uso de material y tiempos de máquina para ofrecer presupuestos competitivos.</p>
            </div>
            <div className="bloque">
                <img className="bloque__img" src="/icon2.png" alt="Público" />
                <h3 className="bloque__titulo">Para Todo Público</h3>
                <p>Asesoramos tanto a hobbistas como a profesionales que necesitan piezas técnicas bajo plano.</p>
            </div>
            <div className="bloque">
                <img className="bloque__img" src="/icon3.png" alt="Envío" />
                <h3 className="bloque__titulo">Envío Seguro</h3>
                <p>Despachamos tus impresiones perfectamente embaladas para evitar daños en geometrías complejas.</p>
            </div>
            <div className="bloque">
                <img className="bloque__img" src="/icon4.png" alt="Calidad" />
                <h3 className="bloque__titulo">La Mejor Calidad</h3>
                <p>Control estricto de retracciones, flujo y temperatura para evitar hilos o debilidad entre capas.</p>
            </div>
        </div>
      </section>

      <footer className="footer">
        <p className="footer__texto"> All-Makers - Todos los Derechos Reservados 2026.</p>
      </footer>
    </>
  );
}