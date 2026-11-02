export interface Producto {
    id : number;
    nombre : string;
    marca: string;
    precio : number;
    imagen : string;
    stock : number;
    categoria : Categoria;
    favorito : boolean
}
export const NOMBRE_TIENDA = 'Tienda Tech';
export type Categoria = 'todas' | 'favoritos' | 'laptops' | 'audio' | 'relojes' |'computadoras';
export type EstadoCarga = 'cargando' | 'listo' | 'error';

export interface ItemCarrito  {
    id: number;
    nombre : string;
    precio : number;
    cantidad : number;
}

export interface DatosEnvio {
    nombre: string;
    email : string; 
    direccion : string;
    telefono : string;
}

export interface DatosContacto {
    nombre: string;
    email : string; 
    telefono : string;
    informacion : string;
}

export interface Pedido {
    id: number;
    usuarioId: number;
    fecha : string;
    cliente : DatosEnvio;
    items : ItemCarrito[];
    total : number;
}

export interface Ticket {
    id: number;
    usuarioId: number | null;
    fecha: string;
    contacto: DatosContacto;
}

export interface Usuario {
    id: number;
    username: string;
    token: string;
    expiraEn: number;

    nombre?: string;
    apellido?: string;
    email?: string;
    genero?: string;
    fotoPerfil?: string;
    edad?: number;
    telefono?: string;
    direccion?: string;
    ciudad?: string;
    pais?: string;
}