import { Link, NavLink } from "react-router";
import { useCart } from "../../aplicacion/useCart";
import formatearPrecio from "../formato.ts";
import { useSesion } from "../../aplicacion/useSesion.tsx";

interface Props { 
    nombre : string; 
    eslogan?: string; 
    resumen?: string; 
} 

export default function Header ({ nombre, eslogan = "Tecnologia para todos" } : Props) { 
    const {unidades, total} = useCart();
    const {usuario, salir} = useSesion();
    return (
        <header className="mb-6 flex items-center justify-around gap-4"> 
            <div className="bg-blue-500 p-2 rounded-md"> 
                <h1 className="text-1xl md:text-2xl font-bold text-blue-50">{nombre}</h1> 
                <p className="text-xs text-blue-200">{eslogan}</p> 
            </div> 

            <nav className="mt-2 flex flex gap-4 text-xs md:text-sm"> 
                <NavLink to="/" className={({ isActive }: { isActive: boolean }) => (isActive ? 'font-bold underline text-blue-800' : 'hover:underline text-blue-500')}>Catalogo</NavLink> 
                <NavLink to="/nosotros" className={({ isActive }: { isActive: boolean }) => (isActive ? 'font-bold underline text-blue-800' : 'hover:underline text-blue-500')}>Nosotros</NavLink> 
                <NavLink to="/checkout" className={({ isActive }: { isActive: boolean }) => (isActive ? 'font-bold underline text-blue-800' : 'hover:underline text-blue-500')}>Checkout</NavLink> 
                <NavLink to="/ayuda" className={({ isActive }: { isActive: boolean }) => (isActive ? 'font-bold underline text-blue-800' : 'hover:underline text-blue-500')}>Ayuda</NavLink> 
            </nav> 

            <p className="rounded-md bg-slate-100 px-3 py-2 text-slate-700 text-xs md:text-sm"> 
                { `${unidades} productos - ${formatearPrecio(total)}` }
            </p> 
            {
                usuario ? (
                    <nav>
                        <Link to="/usuario" className="text-xs md:text-sm hover:underline">Hola, {usuario.nombre}
                        </Link>
                        <button className="ml-2 font-bold italic text-blue-900 hover:underline" onClick={salir}>Salir</button>
                    </nav>

                    
                ) : (
                    <Link to="/login" className="ml-2 underline text-blue-900">Inicie sesión</Link>
                )
            }
        </header> 
    );
}
