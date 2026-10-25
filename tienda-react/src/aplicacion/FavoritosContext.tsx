import { createContext, useEffect, useState, type ReactNode } from "react";
import type  { Producto } from "../dominio/tipos";

interface ValorFavoritos {
    alternar: (producto : Producto) => void;
    favorito : (producto: Producto) => boolean;
}

export const FavoritosContext = createContext<ValorFavoritos | null>(null);
const CLAVE_FAVORITOS = 'tienda_favorito';

function leerFavoritos() : Producto[] {
    try {
      const crudo : unknown = JSON.parse(localStorage.getItem(CLAVE_FAVORITOS) ?? '[]');
      return Array.isArray(crudo) ? (crudo as Producto[]) : [];
    } catch {
        return [];
    }
}

export function FavoritosProvider({children} : {children : ReactNode}) {
    const [favoritos, setFavoritos] = useState<Producto[]>(leerFavoritos);
    useEffect( () => {
        try {
          localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(favoritos));
        } catch (error) {
          console.warn('No se pudo guardar a los productos marcados como favoritos', error instanceof Error ? error.message : error);
        }
    }, [favoritos]);
    function alternar(producto : Producto) {
        setFavoritos((favoritos) => {
            const existente = favoritos.find((i) => i.id === producto.id);

            if (existente) {
                return favoritos.filter((i) => i.id !== producto.id);
            }

            return [...favoritos, { ...producto, favorito: true }];
        });
    }

    const favorito = (producto: Producto) => Boolean(favoritos.find((i) => i.id === producto.id));

    return(
        <FavoritosContext.Provider value={{alternar, favorito}}>
            {children}
        </FavoritosContext.Provider>
    )
}


