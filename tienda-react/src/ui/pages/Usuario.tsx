import { Link } from "react-router";
import { useSesion } from "../../aplicacion/useSesion";
import { leerComprasRealizadas } from "../../infraestructura/pedidos";

import usuarioImagen from "../../img/usuario.png";

export default function Usuario() {
    const { usuario } = useSesion();

    if (!usuario) {
        return (
            <div className="p-6">
                <p className="text-gray-500">Usuario no encontrado</p>
                <Link to="/">Volver al catálogo</Link>
            </div>
        );
    }

    const comprasRealizadas = leerComprasRealizadas(usuario.id);

    return (
        <article className="flex flex-wrap gap-8 p-6 justify-center">
            <img className="w-72 h-72 shrink-0 object-cover rounded-full border-2 border-blue-200"
                src={usuario.fotoPerfil || usuarioImagen} alt={usuario.nombre || usuario.username}/>

            <div className="flex flex-col items-start">
                <h1 className="text-2xl font-bold">
                    {usuario.nombre} {usuario.apellido}
                </h1>

                <p className="mt-2 text-xl">{usuario.email}</p>

                <section className="p-4 border rounded-md mt-4">
                    <h2 className="text-xl font-bold text-slate-700 mb-4">Información de usuario:</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <article className="border-2 p-2 rounded-md">
                            <h3 className="font-bold">Teléfono:</h3>
                            <p>{usuario.telefono || 'No disponible'}</p>
                        </article>

                        <article className="border-2 p-2 rounded-md">
                            <h3 className="font-bold">País:</h3>
                            <p>{usuario.pais || 'No disponible'}</p>
                        </article>

                        <article className="border-2 p-2 rounded-md">
                            <h3 className="font-bold">Género:</h3>
                            <p>{usuario.genero || 'No disponible'}</p>
                        </article>

                        <article className="border-2 p-2 rounded-md">
                            <h3 className="font-bold">Edad:</h3>
                            <p>{usuario.edad ?? 'No disponible'}</p>
                        </article>
                    </div>
                        <article className="m-4 border-2 p-2 rounded-md m-t">
                            <h3 className="font-bold">Ubicacion:</h3>
                            <ul>
                                <li>
                                    <p>Cuidad: {usuario.ciudad ?? 'No disponible'}</p>
                                    <p>Dirección: {usuario.direccion ?? 'No disponible'}</p>
                                </li>
                            </ul>
                        </article>
                    <h3 className="m-2 border-2 rounded-md p-2 text-blue-700 bg-slate-100 border-slate-400">
                        Compras realizadas: {comprasRealizadas}
                    </h3>
                </section>

                <Link to="/" className="underline mt-4">Volver al catálogo</Link>
            </div>
        </article>
    );
}