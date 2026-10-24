import { useParams, Link } from "react-router";
import type { Producto } from "../tipos";
import EtiquetaStock from "../components/EtiquetaStock";
import formatearPrecio from "../formato";

interface Props {
    productos : Producto[];
    onAgregar : (producto : Producto) => void;
}
export default function Detalle({productos, onAgregar} : Props) {
    const {id} = useParams();
    const producto = productos.find((p) => p.id === Number(id));
    if(!producto) {
        return (
            <div className="p-6">
                <p className="text-gray-500"> Producto no encontrado </p>
                <Link to="/" className="underline">Volver al catalogo</Link>
            </div>
        )
    }
    return (
        <article className="flex flex-wrap gap-8 p-6">
            <img src={producto.imagen} alt="" />
            <div>
                <p className="text-sm text-gray-500">{producto.marca}</p>
                <h1 className="text-2xl font-bold">{producto.nombre}</h1>
                <EtiquetaStock stock={producto.stock}></EtiquetaStock>
                <p className="mt-2 text-xl">{formatearPrecio(producto.precio * 1.18)}</p>
                <button className="mt-4 rounded-full border px-4 py-1" onClick={() => onAgregar(producto)}>
                    Agregar el carrito
                </button>
            </div>
        </article>
    );
}