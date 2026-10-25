import { Link, useParams } from "react-router";
import type { Producto } from "../../dominio/tipos";
import EtiquetaStock from "../components/EtiquetaStock";
import formatearPrecio from "../formato";
import { useCart } from "../../aplicacion/useCart";
import { useFavorito } from "../../aplicacion/useFavorito";

interface Props {
    productos : Producto [];
}
export default function Detalle ( {productos} : Props) {
    const {id} = useParams();
    const {agregar} = useCart();
    const {alternar, favorito} = useFavorito();
    const producto = productos.find( (p) => p.id === Number(id));
    if(!producto) {
        return (
            <div className="p-6">
                <p className="text-gray-500">Producto no encontrado</p>
                <Link to="/">Volver al catalogo</Link>
            </div>
        )
    }
    return (
        <article className="flex flex-wrap gap-8 p-6">
            <img src={producto.imagen} alt={producto.nombre} className="w-72 rounded-xl object-contain" />
            <div className="flex flex-col items-start">
                <p className="text-sm text-gray-500">{producto.marca}</p>
                <h1 className="text-2xl font-bold">{producto.nombre}</h1>
                <EtiquetaStock stock={producto.stock}></EtiquetaStock>
                <p className="mt-2 text-xl">{formatearPrecio(producto.precio * 1.18)} con IGV</p>
                <button className="mt-4 rounded-full border px-4 py-1"
                    onClick={() => agregar(producto)}
                    disabled={producto.stock === 0}
                    >
                    {
                        producto.stock === 0 ? 'Agotado' : 'Agregar al carrito'
                    }
                </button>
                <button onClick={() => alternar(producto)} className={`mt-3 rounded-full border px-4 text-sm ${favorito(producto) ? 'opacity-50' : ''}`}
                    aria-label="Agregar producto como favorito">
                    {favorito(producto) ? '♥' : '♡'} 
                </button>
                <Link to="/" className="underline">Volver al catalogo</Link>
            </div>
        </article>
    )
}