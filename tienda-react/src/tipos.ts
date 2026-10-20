export interface Producto {
    id : number;
    nombre : string;
    marca: string;
    precio : number;
    imagen : string;
    stock : number;
    categoria : Categoria;
}

export type Categoria = 'todas'| 'laptops'|'audio'|'relojes';
export type EstadoCarga = 'cargando' | 'listo' | 'error';

export interface ItemCarrito  {
    id: number;
    nombre : string;
    precio : number;
    cantidad : number;
}