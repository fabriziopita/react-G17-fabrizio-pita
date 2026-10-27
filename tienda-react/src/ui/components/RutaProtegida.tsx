import { Navigate, Outlet, useLocation } from "react-router";
import { useSesion } from "../../aplicacion/useSesion";

export default function RutaProtegida() {
    const {usuario} = useSesion();
    const ubicacion = useLocation();
    if (!usuario) {
        return <Navigate to="/login" replace=""></Navigate>
    }
    return <Outlet/>
}