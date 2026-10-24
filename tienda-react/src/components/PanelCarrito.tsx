import type { ItemCarrito } from "../tipos";
import Beneficio from "./Beneficio";
interface Props {
    carrito : ItemCarrito[];
    onQuitar : (id : number) => void;
    onVaciar : () => void;
}
export default function PanelCarrito ({carrito, onQuitar, onVaciar}: Props) {
    return (
    <><section className="mb-6 rounded-xl border p-4">
          <h2 className="font-semibold">Tu carrito</h2>
          {carrito.length === 0 && <p className="text-sm text-gray-500">Tu carrito esta vacio</p>}
          <ul>
            {carrito.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-1 text-sm">
                <span>{item.nombre} x {item.cantidad}</span>
                {/*() => setCarrito(quitarItem(carrito, item.id)) */}
                <button onClick={() => onQuitar(item.id)} aria-label="Quitar del barrito">X</button>
              </li>
            ))}
          </ul>
          {carrito.length > 0 && (
            // setCarrito([])
            <button className="mt-2 text-sm underline" onClick={onVaciar}>Vaciar carrito</button>
          )}
        </section><section className="p-6 mt-8 border-t pt-4 text-sm text-gray-500">
            <h1 className="text-xl font-bold text-center">Conoce nuestros beneficios</h1>
            <div id="beneficios" className="grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-6 p-6">
              <Beneficio titulo="Envio gratis a todo el país" icono="🚚" detalle="Envio gratis a todo el país"></Beneficio>
              <Beneficio titulo="Hasta 12 cuotas sin interés" icono="💳" detalle="Hasta 12 cuotas sin interés"></Beneficio>
              <Beneficio titulo="Garantia de 1 año" icono="🛡️" detalle="Garantía de 1 año en todos nuestros productos"></Beneficio>
            </div>
          </section></>
    )
}