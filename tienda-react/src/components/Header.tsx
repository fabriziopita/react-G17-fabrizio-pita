
interface Props {
    nombre : string;
    eslogan?: string;
}
export default function Header ( {nombre , eslogan = "Tecnologia para todos"} : Props) {
    return(
        <header className="mb-6 flex items-center justify-between">
            <div className="bg-blue-500 p-2 rounded-md">
                <h1 className="text-2xl font-bold text-blue-50">{nombre}</h1>
                <p className="text-xs text-blue-200">{eslogan}</p>
            </div>
            <nav>
                <ul className="flex flex-wrap justify-center gap-5 gap-y-1">
                    <li><a className="hover:text-blue-600" href="#catalogo">Catalogo</a></li>
                    <li><a className="hover:text-blue-600" href="#beneficios">Beneficios</a></li>
                </ul>
            </nav>
            <p className="rounded-md bg-slate-100 px-3 py-2 text-slate-700">
                🛒 0 productos
            </p>
        </header>
    )
}