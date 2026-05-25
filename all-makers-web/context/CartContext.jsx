"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [isClient, setIsClient] = useState(false); 
 
  useEffect(() => {
    setIsClient(true);
    const carritoGuardado = localStorage.getItem('allMakersCarrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('allMakersCarrito', JSON.stringify(carrito));
    }
  }, [carrito, isClient]);

  const agregarAlCarrito = (producto, variante, cantidad) => {
    setCarrito((carritoActual) => {
      const indexExistente = carritoActual.findIndex(
        (item) => Number(item.variante.id) === Number(variante.id)
      );

      if (indexExistente !== -1) {
        return carritoActual.map((item, index) => 
          index === indexExistente 
            ? { ...item, cantidad: item.cantidad + cantidad } 
            : item
        );
      } else {
        return [...carritoActual, { producto, variante, cantidad }];
      }
    });
  };

  const actualizarCantidad = (varianteId, nuevaCantidad) => {
    setCarrito((carritoActual) => 
      carritoActual.map(item => 
        item.variante.id === varianteId 
          ? { ...item, cantidad: nuevaCantidad } 
          : item
      )
    );
  };

  const eliminarDelCarrito = (varianteId) => {
    setCarrito((carritoActual) => 
      carritoActual.filter(item => item.variante.id !== varianteId)
    );
  };

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, actualizarCantidad, eliminarDelCarrito }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};