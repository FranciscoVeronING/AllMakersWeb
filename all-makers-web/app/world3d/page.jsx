import Navbar from '../../components/Navbar';

export default function World3dPage() {
  return (
    <>
      <Navbar />

      <main className="contenedor">
        <h1>¿Qué es la Impresión 3D?</h1>
        
        <div className="nosotros">
            <img className="nosotros__img" src="/p1.jpg" alt="Modelos en filamento" />
            <div className="nosotros__contenido">
                <p>La impresión 3D por deposición fundida (FDM) es un proceso de fabricación aditiva donde un filamento termoplástico se extruye capa por capa para construir objetos tridimensionales precisos.</p>
                <p>Trabajamos con una amplia variedad de materiales adaptados a cada necesidad técnica:</p>
                <ul>
                    <li><strong>PLA:</strong> Ideal para modelos estéticos, figuras y prototipos rápidos por su excelente acabado superficial.</li>
                    <li><strong>PETG:</strong> Combina la facilidad de impresión con resistencia mecánica y química, perfecto para piezas funcionales.</li>
                    <li><strong>Flexibles (TPU):</strong> Para componentes que requieren amortiguación o elasticidad industrial.</li>
                </ul>
            </div>
        </div>
      </main>

      <footer className="footer">
        <p className="footer__texto"> All-Makers - Todos los Derechos Reservados 2026.</p>
      </footer>
    </>
  );
}