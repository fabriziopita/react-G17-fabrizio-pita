
interface Props {
    titulo : string;
    icono : string;
    detalle?: string;
}
export default function Beneficio ( {titulo, icono, detalle} : Props) {
    return(
        <article className="flex flex-col items-center border p-4 border-slate-600 rounded-md bg-slate-100">
            <p className="text-3xl mb-2" aria-hidden="true">
                {icono}
            </p>

            <h2 className="text-xl text-blue-500 font-bold text-center">
                {titulo}
            </h2>

            <p className="text-base text-center text-gray-600">{detalle}</p>
        </article>
    )
}