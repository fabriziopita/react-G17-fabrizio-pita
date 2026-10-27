import type { Usuario } from "../dominio/tipos";

const BASE = 'https://dummyjson.com';
const MINUTOS_SESION = 30;
interface RespuestaLogin {
    id: number;
    username: string;
    firstName?: string;
    email: string;
    accessToken: string;
}

export async function iniciarSesion (usuario : string, clave : string) : Promise<Usuario> {
    const response = await fetch(`${BASE}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: usuario, password: clave, expiresInMins: MINUTOS_SESION})
    });
    if (!response.ok) throw new Error ('Usuario o clave incorrectas');
    const data = (await response.json()) as RespuestaLogin

    return {
        id: data.id,
        nombre: data.firstName || data.username,
        email: data.email,
        token: data.accessToken,
        expiraEn : Date.now() + MINUTOS_SESION * 60 * 1000
    }
}

export async function obtenerPerfil (token: string, signal? : AbortSignal) : Promise<void> {
    const response = await fetch(`${BASE}/auth/me`, {
        headers: {
            'Authorization' : `Bearer ${token}`
        },
        signal
    })
    if (!response.ok) throw new Error (`Sesion rechazada por el servidor (HTTP ${response.status})`);
}