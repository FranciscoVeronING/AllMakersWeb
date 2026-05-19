import Link from 'next/link';

export default function ProductCard({ id, nombre, precio, imagen }) {
  return (
    <div className="product">
        <Link href={`/product/${id}`}>
            <img className="product__img" src={imagen} alt={`Impresión 3D de ${nombre}`} /> 
            <div className="product__info">
                <p className="product__nombre">{nombre}</p>
                <p className="product__precio">${precio}</p> 
            </div>      
        </Link>   
    </div>
  );
}