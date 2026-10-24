import { createContext, useEffect, useState, type ReactNode } from "react";
import type { ItemCarrito, Producto } from "../dominio/tipos";
import { agregarItem, quitarItem } from "../dominio/carrito";

interface ValorCarrito {
    items : ItemCarrito[];
    unidades : number;
    total : number;
    agregar : (producto : Producto) => void;
    quitar: (id : number) => void;
    vaciar: () => void;
}
const CLAVE_CARRITO = 'tienda_carrito';
export const CarritoContext = createContext<ValorCarrito | null>(null);

function leerCarrito() : ItemCarrito[] {
try {
    const crudo : unknown = JSON.parse(localStorage.getItem(CLAVE_CARRITO) ?? '[]');
    return Array.isArray(crudo) ? (crudo as ItemCarrito[]) : [];
} catch (error) {
    return [];
}
}

export function CarritoProvider({children} : {children : ReactNode}) {
    const [carrito, setCarrito] = useState<ItemCarrito[]>(leerCarrito);
        useEffect( () => {
          try {
            localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
          } catch (error) {
            console.warn('No se pudo guardar el carrito', error instanceof Error ? error.message : error);
          }
        }, [carrito]);
        const unidades = carrito.reduce((suma, i) => suma + i.cantidad, 0);
        const total = carrito.reduce((suma, i) => suma + i.precio * i.cantidad, 0);
        function agregar(producto : Producto) {
            setCarrito(agregarItem(producto, carrito))
        }
        function quitar(id : number) {
            setCarrito(quitarItem(carrito, id));
        }
        function vaciar() {
            setCarrito([]);
        }

        return(
            <CarritoContext.Provider value={{items : carrito, unidades, total, agregar, quitar, vaciar}}>
                {children}
            </CarritoContext.Provider>
        )
}