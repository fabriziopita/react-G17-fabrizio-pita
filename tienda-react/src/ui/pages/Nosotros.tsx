import { Link } from "react-router-dom";

export default function Nosotros() {
    return (
        <section className="p-4">
            <h1 className="text-4xl font-extrabold text-slate-800 mb-4 text-center">Sobre nosotros</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-bold text-slate-700 mb-2">¿Quiénes somos?</h2>
                <p className="mt-2 text-gray-500">Somos una tienda de tecnología dedicada a ofrecer laptops, celulares y accesorios que faciliten las actividades diarias de nuestros clientes, brindando variedad, precios competitivos y una buena experiencia de compra.</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <article className="border border-blue-200 bg-blue-100 p-4 rounded-md text-center">
                    <p className="text-3xl mb-2" aria-hidden="true">🎯</p>
                    <h3 className="text-2xl font-bold text-slate-700">Misión</h3>
                    <p className="mt-2 text-gray-600">Ofrecer productos tecnológicos de calidad a precios competitivos, procurando satisfacer las necesidades de nuestros clientes mediante una experiencia de compra sencilla y confiable.</p>
                </article>

                <article className="border border-blue-200 bg-blue-100 p-4 rounded-md text-center">
                    <p className="text-3xl mb-2" aria-hidden="true">🚀</p>
                    <h3 className="text-2xl font-bold text-slate-700">Visión</h3>
                    <p className="mt-2 text-gray-600">Ser una tienda de tecnología reconocida por la calidad y variedad de sus productos, adaptándonos a las nuevas tendencias y necesidades de nuestros clientes.</p>
                </article>
            </div>

            <section className="mb-6">
                <h2 className="text-2xl font-bold text-slate-700 mb-4">Nuestros valores</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <article className="text-center bg-blue-100 p-4 rounded-md border border-blue-500">
                        <p className="text-3xl mb-2" aria-hidden="true">⭐</p>
                        <h3 className="text-xl font-bold text-slate-700">Calidad</h3>
                        <p className="mt-2 text-gray-600">Buscamos ofrecer productos de calidad, precios competitivos y una buena atención a nuestros clientes.</p>
                    </article>

                    <article className="text-center bg-blue-100 p-4 rounded-md border border-blue-500">
                        <p className="text-3xl mb-2" aria-hidden="true">🤝</p>
                        <h3 className="text-xl font-bold text-slate-700">Confianza</h3>
                        <p className="mt-2 text-gray-600">Queremos brindar una experiencia de compra satisfactoria, con información clara y productos de calidad.</p>
                    </article>

                    <article className="text-center bg-blue-100 p-4 rounded-md border border-blue-500">
                        <p className="text-3xl mb-2" aria-hidden="true">💡</p>
                        <h3 className="text-xl font-bold text-slate-700">Innovación</h3>
                        <p className="mt-2 text-gray-600">Nos mantenemos atentos a las nuevas tendencias tecnológicas para ofrecer productos actuales y útiles.</p>
                    </article>
                </div>
            </section>

            <section className="p-5 bg-blue-600 rounded-md flex flex-col items-center gap-4 text-center mb-6">
                <h2 className="text-2xl font-bold text-white">¿Qué ofrecemos?</h2>
                <p className="text-gray-200">Ofrecemos laptops, computadoras, equipos de audio y relojes inteligentes para acompañarte en tus actividades de estudio, trabajo y entretenimiento.</p>
                <h3 className="font-bold text-white">Explora nuestros productos</h3>
                <Link to="/" className="boton-animado bg-white hover:bg-blue-100 text-blue-600 font-bold py-2 px-4 rounded-md">Volver al catálogo</Link>
            </section>

            <p className="mt-2 text-gray-500 text-center">Agradecemos a nuestros clientes por confiar en nosotros y esperamos seguir siendo su tienda de tecnología de confianza.</p>

            <section className="p-5 rounded-md flex flex-col items-center gap-4 text-center border p-4 border-blue-600 mt-5">
                <h1 className="text-2xl font-bold text-slate-700 mb-2">¿Tienes alguna consulta?</h1>
                <Link to="/contacto" className="boton-animado bg-white hover:bg-blue-100 text-blue-600 font-bold py-2 px-4 rounded-md border p-4 border-blue-600">Contactanos aquí</Link>
            </section>
            
        </section>
    );
}