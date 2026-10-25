import { Link } from "react-router-dom";

interface Props {
    titulo : string;
    subtitulo?: string;
}
export default function Banner ( {titulo , subtitulo = "Descubre laptops, celulares y una gran variedad de accesorios para ti"} : Props) {
    return(
        <section className="mb-6 p-6 flex gap-4 flex-col items-start rounded-md bg-slate-100">
            <h1 className="text-2xl text-blue-500 font-bold">{titulo}</h1>
            <p className="text-sm text-gray-500">{subtitulo}</p>
            <a href="#beneficios" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Mira los beneficios de comprar en nuestra tienda
            </a>

        </section>
    )
}