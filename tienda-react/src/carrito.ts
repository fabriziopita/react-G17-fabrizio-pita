import type { ItemCarrito, Producto } from "./tipos";

export function agregarItem (producto : Producto, items : ItemCarrito[]) : ItemCarrito[] {
    const existente = items.find((i) => i.id === producto.id);
    if(existente) {
        const respuesta = items.map((i) => (
            i.id === producto.id ? {...i, cantidad : i.cantidad + 1} : i
        ));
        return respuesta;
    }
    const respuesta = [...items, {
        id : producto.id,
        nombre : producto.nombre,
        precio : producto.precio,
        cantidad : 1
    }];
    return respuesta;
}

export function quitarItem (items : ItemCarrito[], id : number) : ItemCarrito[] {
    return items.filter((i) => i.id !== id);
}