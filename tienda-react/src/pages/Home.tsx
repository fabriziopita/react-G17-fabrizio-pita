import type { Categoria, EstadoCarga, Producto } from "../tipos";
import { useEffect, useState } from "react";
import SkeletonCard from "../components/SkeletonCard";
import ProductCard from "../components/ProductCard";
interface Props {
    esRespaldo : boolean;
    onReintentar : (intento : number, estado : EstadoCarga) => void;
    productos : Producto[];
    estado : EstadoCarga;
    onAgregar : (producto : Producto) => void;
}

const nombreTienda = 'Tienda Tech';
export function Home({esRespaldo, onReintentar, productos, estado, onAgregar} : Props) {
    const categorias: Categoria[] = ['todas', ...new Set(productos.map(p => p.categoria))];
    const [categoriaActiva, setCategoriaActiva] = useState<string>('todas');
    const [termino, setTermino] = useState('');
    const busqueda = termino.trim().toLowerCase();  
    const visibles = productos.filter( (p) => (
        (categoriaActiva === 'todas' || p.categoria === categoriaActiva) && 
        (busqueda === '' || p.nombre.toLowerCase().includes(busqueda) || 
        p.marca.toLowerCase().includes(busqueda))
    ));
      useEffect(() => {
        document.title = `${nombreTienda} - ${visibles.length} resultados`;
    },[visibles.length]);
    return (
        <>
              <section id="catalogo" className="flex justify-center gap-4 flex-wrap"></section>
            {
            esRespaldo && (
                <p className="mb-4 rounded-lg border border-orange-300 bg-orange-500 p-2 text-sm">
                    Mostrando el catalogo Local, no pudimos conectar con la tienda.
                    <button className="ml-2 underline" onClick={() => {onReintentar}}>Reintentar</button>
                </p>
                )
            }
            <nav className="mb-4 flex gap-2" aria-label="Filtrar por categoria">
                {
                categorias.map((c) => (
                    <button key={c} onClick={() => setCategoriaActiva(c)} 
                    className={`rounded-full border px-3 py-1 text-sm ${ c === categoriaActiva ? 'bg-black text-white' : ''}`}>{c}
                    </button>
                ))
                }
            </nav>
            <input type="search" placeholder="Buscar por nombre o marca..." 
                    className="mb-4 w-64 rounded-lg border px-3 py-2 text-sm"
                    value={termino} aria-label="Buscar productos"
                    onChange={(e) => setTermino(e.target.value)}
            />
            {estado === 'cargando' && (
            <section className="flex flex-wrap gap-4">
                {Array.from({length : 8}).map((_, indice) => (
                    <SkeletonCard key={indice}/>
                ))}
            </section>
            )}
            <p className="mb-4 text-sm text-gray-500">{visibles.length} productos</p>
            {estado === 'error' && <p className="text-red-600">No pudimos cargar los productos</p>}
            {estado === 'listo' && visibles.length === 0 && (
                <p className="text-gray-500">{
                busqueda !== '' ? `No encontramos productos para "${termino.trim()}"` : 'No hay productos en esta categoria'
                }</p>
            )}
            {estado === 'listo' && (
                    <section>
                    {
                        visibles.map((p) => <ProductCard producto={p} key={p.id} onAgregar={onAgregar}/>)
                    }
                    </section>
                )
            }
        </>
    );
}