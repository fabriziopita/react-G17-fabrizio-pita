import { useState, useEffect } from "react"
import {NOMBRE_TIENDA, type EstadoCarga, type Producto} from "./dominio/tipos"
import { obtenerProductos } from "./infraestructura/api"
import Detalle from './ui/pages/Detalle';
import { Route, Routes } from "react-router"
import { Home } from "./ui/pages/Home"
import Layout from "./ui/layout/Layout"
import NoEncontrada from "./ui/pages/NoEncontrada"
import Checkout from "./ui/pages/Checkout"

export default function App() {

  const [productos, setProductos] = useState<Producto[]>([]);
  const [estado, setEstado] = useState<EstadoCarga>('cargando');
  const [esRespaldo, setEsRespaldo] = useState(false);
  const [intento, setIntento] = useState(0);
  useEffect(() => {
    const controlador = new AbortController();
    async function cargar () {
      try {
        const resultado = await obtenerProductos();
        setProductos(resultado.productos);
        setEsRespaldo(resultado.esRespaldo);
        setEstado('listo');
      } catch (error) {
        if(error instanceof DOMException && error.name === 'AbortError') return;
        console.warn('Fallo imprevisto al cargar');
        setEstado('error');
      }
    }
    cargar();
    return () => controlador.abort();
  },[intento])  
  
  return (
    <Routes>
      <Route element = {
        <Layout
          nombreTienda = {NOMBRE_TIENDA}
        />
      }>
        <Route path="/" element = {
          <Home esRespaldo={esRespaldo} onReintentar={() => {setIntento(intento + 1); setEstado('cargando')}}
          productos={productos} estado={estado}/>
        }
        />
        <Route path="/producto/:id" element = {
          <Detalle productos={productos}/>
        }
        />
        <Route path="/checkout" element = {
            <Checkout/>
          }
        />
        
      </Route>
      <Route path="*" element ={
          <NoEncontrada/>
      }/>
    </Routes>
  )
}