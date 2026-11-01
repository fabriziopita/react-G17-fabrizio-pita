import type { Usuario } from "../dominio/tipos";

const BASE = import.meta.env.VITE_API_URL;
const MINUTOS_SESION = 30;

interface RespuestaLogin {
    id: number;
    username: string;
    accessToken: string;
}

interface RespuestaPerfil {
    firstName?: string;
    lastName?: string;
    gender?: string;
    image?: string;
    email?: string;
    age?: number;
    phone?: string;
    address?: {
        address: string;
        city: string;
        country: string;
    };
}

export async function iniciarSesion(usuario: string, clave: string): Promise<Usuario> {
    const response = await fetch(`${BASE}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: usuario,
            password: clave,
            expiresInMins: MINUTOS_SESION
        })
    });

    if (!response.ok) throw new Error('Usuario o clave incorrectas');

    const data = await response.json() as RespuestaLogin;

    return {
        id: data.id,
        username: data.username,
        token: data.accessToken,
        expiraEn: Date.now() + MINUTOS_SESION * 60 * 1000
    };
}

export async function obtenerPerfil(token: string, signal?: AbortSignal): Promise<Partial<Usuario>> {
    const response = await fetch(`${BASE}/auth/me`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        signal
    });

    if (!response.ok) throw new Error(`Sesion rechazada por el servidor (HTTP ${response.status})`);

    const data = await response.json() as RespuestaPerfil;

    return {
        nombre: data.firstName,
        apellido: data.lastName,
        email: data.email,
        genero: data.gender,
        fotoPerfil: data.image,
        edad: data.age,
        telefono: data.phone,
        direccion: data.address?.address,
        ciudad: data.address?.city,
        pais: data.address?.country
    };
}