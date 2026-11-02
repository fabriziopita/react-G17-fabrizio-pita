import { useState, type ChangeEvent, type FormEvent } from "react"
import type { DatosContacto, Ticket } from "../../dominio/tipos"
import { useSesion } from "../../aplicacion/useSesion";
import { guardarTicket } from "../../infraestructura/tickets";
import { Link } from "react-router-dom";

type Errores = Partial<Record<keyof DatosContacto, string>>
function validar (form : DatosContacto) : Errores {
    const errores : Errores = {}
    if(form.nombre.trim().length < 3) errores.nombre = 'Escribe al menos 3 caracteres';
    if(!/^\S+@\S+\.\S+$/.test(form.email)) errores.email = 'Escribe un correo electronico valido';
    if(!/^[0-9\s+-]{7,}$/.test(form.telefono)) errores.telefono = 'Escriba almenos 7 digitos';
    if (form.informacion.trim().length < 10) errores.informacion = 'Escribe al menos 10 caracteres';
    if (form.informacion.length > 800) errores.informacion = 'Máximo 800 caracteres';
    return errores;
}
export default function Contacto () {
    const {usuario} = useSesion();
    const [form, setForm] = useState<DatosContacto>({nombre:'', email:'',telefono:'',informacion:''})

    const [ticketConsulta, setTicketConsulta] = useState(0);
    const [ticketActualizado, setTicketActualizado] = useState(false);

    const cambiar = (campo : keyof DatosContacto) => (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((f) => ({...f, [campo] : e.target.value})); 

    type tocadoType = Partial<Record<keyof DatosContacto, boolean>>;
        const [tocados, setTocados] = useState<tocadoType>({}); 
    const marcar = (campo : keyof DatosContacto ) => () => 
        setTocados((tocados) => ({...tocados , [campo] : true}));
    const errores = validar(form);
    const hayErrores = Object.keys(errores).length > 0;
    
    async function enviar(e : FormEvent) {
        e.preventDefault();
        setTocados({nombre: true, email:true, telefono:true, informacion: true});
        if(hayErrores) return;
        setTicketActualizado(false);
        const ticket: Ticket = {
            id: Date.now(),
            usuarioId: usuario?.id ?? null,
            fecha: new Date().toISOString(),
            contacto: form,
        };
        if (guardarTicket(ticket)) {
            setTicketActualizado(true);
            setTicketConsulta(ticket.id);
            setForm({ nombre: '', email: '', telefono: '', informacion: '' });
            setTocados({nombre: false, email: false, telefono: false, informacion: false})
        }
    }

    return(
        <form className="flex max-w-md flex-col gap-3" onSubmit={enviar}>
            <h1 className="text-2xl font-bold">Datos de contacto</h1>
            <label className="flex flex-col text-sm">
                Nombre completo
                <input type="text" className="rounded border px-3 py-2" value={form.nombre} 
                    onChange={cambiar('nombre')} onBlur={marcar('nombre')}/>
                {
                    tocados.nombre && errores.nombre &&(
                        <span className="text-xs text-red-600">{errores.nombre}</span>
                    )
                }
            </label>
            <label className="flex flex-col text-sm">
                Correo electronico
                <input type="text" className="rounded border px-3 py-2" value={form.email} 
                    onChange={cambiar('email')} onBlur={marcar('email')}/>
                {
                    tocados.email && errores.email &&(
                        <span className="text-xs text-red-600">{errores.email}</span>
                    )
                }
            </label>
            <label className="flex flex-col text-sm">
                Telefono
                <input type="text" className="rounded border px-3 py-2" value={form.telefono} 
                    onChange={cambiar("telefono")} onBlur={marcar('telefono')}/>
                {
                    tocados.telefono && errores.telefono &&(
                        <span className="text-xs text-red-600">{errores.telefono}</span>
                    )
                }
            </label>
            <label className="flex flex-col text-sm">
                Información de contacto
                <textarea className="rounded border px-3 py-2" value={form.informacion}
                    onChange={cambiar('informacion')}
                    onBlur={marcar('informacion')}/>
                {
                    tocados.informacion && errores.informacion &&(
                        <span className="text-xs text-red-600">{errores.informacion}</span>
                    )
                }
            </label>
            <button type="submit" className="mt-2 rounded-full border px-4 py-2 hover:bg-blue-600 hover:text-white">Enviar consulta</button>
            {
                ticketActualizado && (
                    <p className="mt-2 text-sm text-gray-600">Tu consulta con Ticket Nro. {ticketConsulta} quedo registrada y será atendida lo más pronto posible</p>
                )
            }
            <Link to="/" className="underline">Volver al catalogo</Link>
        </form>
    )
}