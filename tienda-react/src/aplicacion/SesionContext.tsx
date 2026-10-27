import { createContext, useState, type ReactNode } from "react";
import type { Usuario } from "../dominio/tipos";
import { iniciarSesion } from "../infraestructura/auth";

interface ValorSesion {
    usuario : Usuario | null;
    entrar : (usuario : string, clave : string) => Promise<void>;
    salir : () => void;
}

export const SesionContext = createContext<ValorSesion | null>(null);

export function SesionProvider({children} : {children : ReactNode}) {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    async function entrar(usuario : string, clave: string) {
        const conectado = await iniciarSesion(usuario, clave);
        setUsuario(conectado);
    }
    function salir(){
        setUsuario(null);
    }
    return(
        <SesionContext.Provider value={{usuario: usuario, entrar, salir}}>
            {children}
        </SesionContext.Provider>
    )
}