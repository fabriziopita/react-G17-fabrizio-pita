import Footer from "./components/Footer"
import Header from "./components/Header"
import Banner from "./components/Banner"
import ProductCard from "./components/ProductCard"
import { productos } from "./datos"
import Beneficio from "./components/Beneficio"



export default function App() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <Header nombre="TecCart" eslogan="Una Vida Tecnologica"/>
      <Banner titulo="Tecnología para tu próximo nivel"></Banner>
      {/* PROPS */}
      <section id="catalogo" className="flex justify-center gap-4 flex-wrap">
        {
          productos.map((p) => <ProductCard producto={p} key={p.id}/>)
        }
      </section>
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
  )
}
