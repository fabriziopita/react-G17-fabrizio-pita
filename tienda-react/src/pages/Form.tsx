import { useState } from "react";
import type { DatosEnvio, ItemCarrito } from "../tipos"

interface Props {
    carrito : ItemCarrito[];
}
type Errores = Partial<Record<keyof DatosEnvio, string>>;

function validar(form:DatosEnvio) : Errores {
    const errores : Errores = {};
    if(form.nombre.trim().length < 3) errores.nombre = 'Escribe al menos 3 caracteres';
    
    if(form.direccion.trim().length < 5) errores.direccion = 'Escribe una direccion mas completa';
    return errores;
}

export default function ({carrito}: Props) {
    const [form, setForm] = useState<DatosEnvio>({nombre: '', email: '', direccion: '', telefono: ''});
    const errores = validar(form);

    return (
        <form className="flex max-w-md flex-col gap-3">
            <h1 className="text-2xl font-bold">Datos de envio</h1>
            <label className="flex flex-col text-sm">
                Nombre completo
                <input className="rounded-border px-3 py-2" value={form.nombre}/>
                {
                    errores.nombre &&
                    <span className="text-xs text-red-600">{errores.nombre}</span>
                }
            </label>
        </form>
    )
}