import { useState, type FormEvent } from "react";
import { useSesion } from "../../aplicacion/useSesion";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [enviando, setEnviando] = useState(false);
    const {entrar} = useSesion();
    const navegar = useNavigate();

    async function manejarEnvio(e : FormEvent) {
        e.preventDefault();
        setError('');
        try {
            await entrar(usuario, password);   
            navegar('/');
        } catch (error) {
            setError(error instanceof Error ? error.message : 'No se pudo iniciar sesión');
        } finally {
            setEnviando(false);
        }
    }
    return (
        <form onSubmit={manejarEnvio} action="" className="mx-auto flex max-w-sm flex-col gap-3">
            <h1 className="text-2xl font-bold">Inicia Sesion</h1>
            <label className="flex flex-col text-sm">
                Usuario
                <input type="text" className="rounded border px-3 py-2" value={usuario} onChange={(e) => setUsuario(e.target.value)}>
                </input>
            </label>
            <label className="flex flex-col text-sm">
                Contraseña
                <input type="password" className="rounded border px-3 py-2" value={password} onChange={(e) => setPassword(e.target.value)}>
                </input>
            </label>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            disabled = {enviando}>
                {enviando ? 'Iniciar sesión' : 'Entrando...'}
            </button>
        </form>
    )
}