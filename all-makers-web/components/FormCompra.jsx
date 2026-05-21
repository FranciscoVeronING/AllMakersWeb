"use client";
import { useState } from 'react';

export default function FormCompra({ variantes }) {
  const [varianteSeleccionada, setVarianteSeleccionada] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  const handleSelectChange = (e) => {
    const idSeleccionado = parseInt(e.target.value);
    const varianteEncontrada = variantes.find(v => v.id === idSeleccionado);
    setVarianteSeleccionada(varianteEncontrada);
  };

  // --- LÓGICA DE VALIDACIÓN ---
  const tieneVariante = varianteSeleccionada !== null;
  const cantidadValida = cantidad > 0;
  const hayStock = tieneVariante && varianteSeleccionada.stock >= cantidad;

  const botonActivo = tieneVariante && cantidadValida && hayStock;

  return (
    <form className="formulario">
        <select 
            className="formulario__campo" 
            value={tieneVariante ? varianteSeleccionada.id : ""} 
            onChange={handleSelectChange}
        >
            <option value="" disabled>Seleccionar Variante</option>
            {variantes.map((variante) => (
                <option key={variante.id} value={variante.id}>
                    {variante.tamano} - {variante.material} ({variante.color}) 
                    {variante.stock < 5 ? ` (Quedan ${variante.stock})` : ''}
                </option>
            ))}
        </select>
        
        <input 
            className="formulario__campo" 
            type="number" 
            placeholder="Cantidad" 
            min="1" 
            value={cantidad}
            onChange={(e) => setCantidad(parseInt(e.target.value) || 1)}
        />
        
        <button 
            className="formulario__submit" 
            type="button"
            disabled={!botonActivo}
            style={{ 
                opacity: botonActivo ? 1 : 0.5, 
                cursor: botonActivo ? 'pointer' : 'not-allowed' 
            }}
        >
            {!tieneVariante 
                ? 'Selecciona una variante' 
                : (!hayStock 
                    ? 'Sin stock suficiente' 
                    : `Agregar al carrito - $${varianteSeleccionada.precio * cantidad}`
                  )
            }
        </button>
    </form>
  );
}