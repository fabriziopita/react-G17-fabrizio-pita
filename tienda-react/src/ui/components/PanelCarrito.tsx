import { useCart } from "../../aplicacion/useCart";
export default function PanelCarrito () {
    const {items, quitar, vaciar} = useCart();
    return (
    <><section className="mb-6 rounded-xl border p-4">
          <h2 className="font-semibold">Tu carrito</h2>
          {items.length === 0 && <p className="text-sm text-gray-500">Tu carrito esta vacio</p>}
          <ul>
            {items.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-1 text-sm">
                <span>{item.nombre} x {item.cantidad}</span>
                {/*() => setCarrito(quitarItem(carrito, item.id)) */}
                <button onClick={() => quitar(item.id)} aria-label="Quitar del barrito">X</button>
              </li>
            ))}
          </ul>
          {items.length > 0 && (
            // setCarrito([])
            <button className="mt-2 text-sm underline" onClick={vaciar}>Vaciar carrito</button>
          )}
        </section></>
    )
}