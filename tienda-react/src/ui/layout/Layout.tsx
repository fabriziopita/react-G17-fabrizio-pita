import { useState } from "react";
import { Outlet } from "react-router";
import Banner from "../components/Banner";
import Header from "../components/Header";
import PanelCarrito from "../components/PanelCarrito";
import Footer from "../components/Footer";
import { useCart } from "../../aplicacion/useCart";
import formatearPrecio from "../../formato";
import Beneficio from "../components/Beneficio";

interface Props {
    nombreTienda : string;
}
export default function ({nombreTienda} : Props) {
    const [carritoAbierto, setCarritoAbierto] = useState(false);
    const {unidades, total} = useCart();
    return (
        <main className="mx-auto max-w-5xl p-6">
            <Header nombre={nombreTienda} eslogan="Una Vida Tecnologica" 
            // `🛒 ${unidades} productos - ${formatearPrecio(total)}`
            resumen={`🛒 ${unidades} productos - ${formatearPrecio(total)}`}/>
            <Banner titulo="Tecnología para tu próximo nivel"></Banner>
            
            <button className="mb-4 text-sm" 
            onClick={() => setCarritoAbierto(!carritoAbierto)}>
                {carritoAbierto ? 'Ocultar carrito' : 'Ver carrito'}
            </button>
                  
            {carritoAbierto && (<PanelCarrito/>)}
            <Outlet/>
                <section className="p-6 mt-8 border-t pt-4 text-sm text-gray-500">
                    <h1 className="text-xl font-bold text-center">Conoce nuestros beneficios</h1>
                    <div id="beneficios" className="grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-6 p-6">
                        <Beneficio titulo="Envio gratis a todo el país" icono="🚚" detalle="Envio gratis a todo el país"></Beneficio>
                        <Beneficio titulo="Hasta 12 cuotas sin interés" icono="💳" detalle="Hasta 12 cuotas sin interés"></Beneficio>
                        <Beneficio titulo="Garantia de 1 año" icono="🛡️" detalle="Garantía de 1 año en todos nuestros productos"></Beneficio>
                    </div>
                </section>
            <Footer/>
        </main>
    );
}