import { Link } from "react-router-dom";
import Pregunta from "../components/Pregunta";

export default function Ayuda() {
    return (
        <section className="p-4">
            <h1 className="text-4xl font-extrabold text-slate-800 mb-4 text-center">Ayuda y atención al cliente</h1>

            <section className="mb-6 rounded-md border border-blue-200 p-4">
                <h2 className="text-2xl font-bold text-slate-700 mb-4">Preguntas frecuentes</h2>

                <ul className="flex flex-col gap-8 items-start">
                    <li>
                        <Pregunta pregunta="¿Cómo puedo buscar un producto?" respuesta="Puedes utilizar la barra de búsqueda del catálogo para encontrar productos por su nombre o marca. También puedes seleccionar una categoría para filtrar los productos disponibles." />
                    </li>

                    <li>
                        <Pregunta pregunta="¿Cómo agrego productos al carrito?" respuesta="Selecciona el botón Agregar al carrito en el producto que deseas comprar. Después podrás revisar los productos seleccionados y continuar con el proceso de compra." />
                    </li>

                    <li>
                        <Pregunta pregunta="¿Cómo guardo productos en favoritos?" respuesta="Pulsa el botón con forma de corazón que aparece en cada producto. Los productos seleccionados se guardarán en favoritos y podrás consultarlos desde la categoría Favoritos." />
                    </li>

                    <li>
                        <Pregunta pregunta="¿Qué significa que un producto esté agotado?" respuesta="Significa que actualmente no cuenta con unidades disponibles. Por ese motivo, no podrás agregarlo al carrito." />
                    </li>

                    <li>
                        <Pregunta pregunta="¿Cómo puedo consultar el precio de un producto?" respuesta="Puedes consultar su precio directamente desde el catálogo o ingresar a su página de detalle para obtener más información sobre el producto y su precio con IGV." />
                    </li>
                </ul>
            </section>

            <section className="mb-6 rounded-md border border-blue-300 p-4">
                <h2 className="text-2xl font-bold text-slate-700 mb-4">Guía para realizar una compra</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <article className="border border-blue-300 bg-blue-50 p-4 rounded-md">
                        <p className="text-3xl mb-2" aria-hidden="true">🔎</p>
                        <h3 className="text-xl font-bold text-blue-800">Paso 1: Selecciona un producto</h3>
                        <p className="mt-2 text-gray-600">Explora nuestro catálogo y selecciona el producto que deseas comprar.</p>
                    </article>

                    <article className="border border-blue-300 bg-blue-50 p-4 rounded-md">
                        <p className="text-3xl mb-2" aria-hidden="true">🛒</p>
                        <h3 className="text-xl font-bold text-blue-800">Paso 2: Agrega al carrito</h3>
                        <p className="mt-2 text-gray-600">Haz clic en el botón "Agregar al carrito" para incluir el producto en tu selección.</p>
                    </article>

                    <article className="border border-blue-300 bg-blue-50 p-4 rounded-md">
                        <p className="text-3xl mb-2" aria-hidden="true">📋</p>
                        <h3 className="text-xl font-bold text-blue-800">Paso 3: Revisa tu carrito</h3>
                        <p className="mt-2 text-gray-600">Dirígete a tu carrito para revisar los productos seleccionados y continuar con la compra.</p>
                    </article>

                    <article className="border border-blue-300 bg-blue-50 p-4 rounded-md">
                        <p className="text-3xl mb-2" aria-hidden="true">💳</p>
                        <h3 className="text-xl font-bold text-blue-800">Paso 4: Completa tu compra</h3>
                        <p className="mt-2 text-gray-600">Completa los datos solicitados y revisa tu pedido para finalizar el proceso de compra.</p>
                    </article>
                </div>
            </section>

            <section className="mb-6 rounded-md border border-slate-300 p-4">
                <h2 className="text-2xl font-bold text-slate-700 mb-4">Soluciones a problemas frecuentes</h2>

                <div className="grid grid-cols-4 gap-4">
                    <article className="border border-slate-300 bg-slate-100 p-4 rounded-md">
                        <p className="text-3xl mb-2" aria-hidden="true">🚫</p>
                        <h3 className="text-lg font-bold text-slate-700">No puedo agregar un producto</h3>
                        <p className="mt-2 text-gray-600">Verifica que el producto tenga unidades disponibles. Si aparece como Agotado, no podrás agregarlo al carrito.</p>
                    </article>

                    <article className="border border-slate-300 bg-slate-100 p-4 rounded-md">
                        <p className="text-3xl mb-2" aria-hidden="true">🔍</p>
                        <h3 className="text-lg font-bold text-slate-700">No encuentro un producto</h3>
                        <p className="mt-2 text-gray-600">Utiliza la barra de búsqueda o selecciona una categoría para encontrar el producto que necesitas.</p>
                    </article>

                    <article className="border border-slate-300 bg-slate-100 p-4 rounded-md">
                        <p className="text-3xl mb-2" aria-hidden="true">❤️</p>
                        <h3 className="text-lg font-bold text-slate-700">No aparecen mis favoritos</h3>
                        <p className="mt-2 text-gray-600">Comprueba que hayas marcado los productos con el botón de corazón y selecciona la categoría Favoritos en el catálogo.</p>
                    </article>

                    <article className="border border-slate-300 bg-slate-100 p-4 rounded-md">
                        <p className="text-3xl mb-2" aria-hidden="true">🌐</p>
                        <h3 className="text-lg font-bold text-slate-700">La página no carga correctamente</h3>
                        <p className="mt-2 text-gray-600">Verifica tu conexión a internet e intenta actualizar la página. Si el problema continúa, puedes comunicarte con nosotros.</p>
                    </article>
                </div>
            </section>

            <section className="rounded-md flex flex-col items-center gap-4 text-center border border-blue-600 p-5 mt-5">
                <h2 className="text-2xl font-bold text-slate-700">¿Tienes alguna consulta adicional?</h2>
                <p className="text-gray-500">Visita nuestra página de contacto para realizar alguna consulta o solicitar información adicional.</p>
                <Link to="/contacto" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Contáctanos aquí</Link>
            </section>
        </section>
    );
}