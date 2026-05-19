import Navbar from '../../../components/Navbar';

export default function ProductPage({ params }) {
  const { id } = params;

  // Simulamos buscar el producto en una base de datos usando el ID
  const product = {
    id: id,
    nombre: "Maceta Suculenta", 
    descripcion: "Impresa en PLA de alta calidad. by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
    precio: 120,
    imagen: "/p1.jpg"
  };

  return (
    <>
      <Navbar />

      <main className="contenedor">
        <h1>{product.nombre}</h1>

        <div className="maceta">
            <img className="maceta__img" src={product.imagen} alt={product.nombre} />

            <div className="maceta__contenido">
                <p>{product.descripcion}</p>
                
                <form className="formulario">
                    <select className="formulario__campo" defaultValue="">
                        <option value="" disabled>Seleccionar tamaño</option>
                        <option value="5x5">5x5cm</option>   
                        <option value="7x7">7x7cm</option> 
                        <option value="10x10">10x10cm</option>         
                    </select>
                    <input className="formulario__campo" type="number" placeholder="Cantidad" min="1" defaultValue="1" />
                    
                    <button className="formulario__submit" type="button">
                        Agregar al carrito - ${product.precio}
                    </button>
                </form>
            </div>
        </div>
      </main>

      <footer className="footer">
        <p className="footer__texto"> All-Makers - Todos los Derechos Reservados 2026.</p>
      </footer>
    </>
  );
}