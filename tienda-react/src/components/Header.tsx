import { NavLink } from "react-router"; 

interface Props { 
    nombre : string; 
    eslogan?: string; 
    resumen?: string; 
} 

export default function Header ({ nombre, eslogan = "Tecnologia para todos", resumen } : Props) { 
    return (
        <header className="mb-6 flex items-center justify-between"> 
            <div className="bg-blue-500 p-2 rounded-md"> 
                <h1 className="text-2xl font-bold text-blue-50">{nombre}</h1> 
                <p className="text-xs text-blue-200">{eslogan}</p> 
            </div> 

            <nav className="mt-2 flex gap-4"> 
                <NavLink to="/" className={({isActive}) => (isActive ? 'font-bold underline' : 'hover:underline hover:text-blue-600')}>Catalogo</NavLink> 
                
                <NavLink to="/checkout" className={({isActive}) => (isActive ? 'font-bold underline' : 'hover:underline hover:text-blue-600')}>Checkout</NavLink> 
                
                <a className="hover:underline hover:text-blue-600" href="#beneficios">Beneficios</a> 
            </nav> 

            <p className="rounded-md bg-slate-100 px-3 py-2 text-slate-700"> 
                { resumen ?? '🛒 0 productos' }
            </p> 
        </header> 
    );
}
